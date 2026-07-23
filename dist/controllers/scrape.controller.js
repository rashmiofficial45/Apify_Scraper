"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeController = void 0;
const db_service_1 = require("../services/db.service");
const apify_service_1 = require("../services/apify.service");
/**
 * Background polling helper for local development or fallback when webhooks are not received.
 */
function startBackgroundPolling(requestId, runId) {
    let attempts = 0;
    const maxAttempts = 120; // 120 * 5s = 10 minutes max execution polling
    const interval = setInterval(async () => {
        attempts++;
        try {
            // 1. Fetch current database record to check if webhook already completed it
            const currentReq = await db_service_1.prisma.scrapeRequest.findUnique({
                where: { id: requestId }
            });
            if (!currentReq || ['COMPLETED', 'FAILED'].includes(currentReq.status)) {
                clearInterval(interval);
                return;
            }
            if (attempts >= maxAttempts) {
                clearInterval(interval);
                await db_service_1.prisma.scrapeRequest.update({
                    where: { id: requestId },
                    data: {
                        status: 'FAILED',
                        logs: {
                            create: {
                                level: 'ERROR',
                                message: 'Scraping request timed out during internal polling (max attempts reached).'
                            }
                        }
                    }
                });
                return;
            }
            // 2. Fetch Apify status
            const run = await apify_service_1.ApifyService.getRunDetails(runId);
            if (!run) {
                clearInterval(interval);
                return;
            }
            const apifyStatus = run.status; // READY, RUNNING, SUCCEEDED, FAILED, TIMED-OUT, ABORTED
            if (apifyStatus === 'SUCCEEDED') {
                clearInterval(interval);
                // Fetch dataset items
                const items = await apify_service_1.ApifyService.getDatasetItems(run.defaultDatasetId);
                // Save to DB
                await db_service_1.prisma.scrapeRequest.update({
                    where: { id: requestId },
                    data: {
                        status: 'COMPLETED',
                        datasetId: run.defaultDatasetId,
                        responses: {
                            create: {
                                data: items // Prisma Json supports arrays
                            }
                        },
                        logs: {
                            create: {
                                level: 'INFO',
                                message: `Scrape run succeeded. Downloaded ${items.length} items.`
                            }
                        }
                    }
                });
            }
            else if (['FAILED', 'TIMED-OUT', 'ABORTED'].includes(apifyStatus)) {
                clearInterval(interval);
                await db_service_1.prisma.scrapeRequest.update({
                    where: { id: requestId },
                    data: {
                        status: 'FAILED',
                        datasetId: run.defaultDatasetId,
                        logs: {
                            create: {
                                level: 'ERROR',
                                message: `Scrape run finished with status: ${apifyStatus}.`
                            }
                        }
                    }
                });
            }
            else if (apifyStatus === 'RUNNING' && currentReq.status !== 'RUNNING') {
                await db_service_1.prisma.scrapeRequest.update({
                    where: { id: requestId },
                    data: {
                        status: 'RUNNING',
                        logs: {
                            create: {
                                level: 'INFO',
                                message: 'Scrape run state updated to RUNNING.'
                            }
                        }
                    }
                });
            }
        }
        catch (error) {
            clearInterval(interval);
            console.error(`Error polling run ${runId}:`, error);
            await db_service_1.prisma.scrapeRequest.update({
                where: { id: requestId },
                data: {
                    status: 'FAILED',
                    logs: {
                        create: {
                            level: 'ERROR',
                            message: `Error during run polling: ${error.message || error}`
                        }
                    }
                }
            });
        }
    }, 5000); // Check status every 5 seconds
}
class ScrapeController {
    /**
     * Triggers a scrape request for an Apify Actor.
     * POST /api/scrape/trigger
     * Payload: { actorName: string, inputData: object }
     */
    static async triggerScrape(req, res) {
        const { actorName, inputData } = req.body;
        if (!actorName) {
            return res.status(400).json({ error: 'actorName is required.' });
        }
        if (!inputData || typeof inputData !== 'object') {
            return res.status(400).json({ error: 'inputData must be a valid JSON object.' });
        }
        let scrapeRequest;
        try {
            // 1. Create a request record with Pending state
            scrapeRequest = await db_service_1.prisma.scrapeRequest.create({
                data: {
                    actorName,
                    status: 'PENDING',
                    inputData: inputData,
                    logs: {
                        create: {
                            level: 'INFO',
                            message: `Initialized scraping request for Actor: ${actorName}`
                        }
                    }
                }
            });
            // 2. Trigger the Actor run in Apify asynchronously
            const run = await apify_service_1.ApifyService.triggerActor(actorName, inputData, scrapeRequest.id);
            // 3. Update the request with Apify run details and update status to RUNNING
            scrapeRequest = await db_service_1.prisma.scrapeRequest.update({
                where: { id: scrapeRequest.id },
                data: {
                    status: 'RUNNING',
                    runId: run.id,
                    datasetId: run.defaultDatasetId,
                    logs: {
                        create: {
                            level: 'INFO',
                            message: `Apify Actor run triggered successfully. Run ID: ${run.id}`
                        }
                    }
                }
            });
            // 4. Start background polling in case webhooks are disabled / local environment
            startBackgroundPolling(scrapeRequest.id, run.id);
            return res.status(202).json({
                message: 'Scraping request triggered successfully.',
                requestId: scrapeRequest.id,
                status: scrapeRequest.status,
                runId: run.id
            });
        }
        catch (error) {
            console.error('Failed to trigger scraping:', error);
            if (scrapeRequest) {
                await db_service_1.prisma.scrapeRequest.update({
                    where: { id: scrapeRequest.id },
                    data: {
                        status: 'FAILED',
                        logs: {
                            create: {
                                level: 'ERROR',
                                message: `Failed to trigger Actor run: ${error.message || error}`
                            }
                        }
                    }
                });
            }
            return res.status(500).json({
                error: 'Failed to start scraping request.',
                details: error.message || error
            });
        }
    }
    /**
     * Triggers a scrape request for the Apify Instagram Actor.
     * POST /api/scrape/instagram
     * Payload: { usernames: string[], resultsType?: string, resultsLimit?: number }
     */
    static async triggerInstagramScrape(req, res) {
        const { usernames, resultsType, resultsLimit } = req.body;
        if (!usernames || !Array.isArray(usernames) || usernames.length === 0) {
            return res.status(400).json({ error: 'usernames array is required and must not be empty.' });
        }
        const actorName = 'apify/instagram-scraper';
        const inputData = {
            directUrls: usernames.map((u) => u.startsWith('http') ? u : `https://www.instagram.com/${u}/`),
            resultsType: resultsType || 'posts',
            resultsLimit: Number(resultsLimit) || 3,
            proxyConfiguration: {
                useApifyProxy: true
            }
        };
        req.body = { actorName, inputData };
        return ScrapeController.triggerScrape(req, res);
    }
    /**
     * Retrieves scraping request status, run details, and logs.
     * GET /api/scrape/status/:id
     */
    static async getScrapeStatus(req, res) {
        const id = req.params.id;
        try {
            const scrapeRequest = await db_service_1.prisma.scrapeRequest.findUnique({
                where: { id },
                include: {
                    logs: {
                        orderBy: { createdAt: 'asc' }
                    }
                }
            });
            if (!scrapeRequest) {
                return res.status(404).json({ error: 'Scrape request not found.' });
            }
            return res.json(scrapeRequest);
        }
        catch (error) {
            return res.status(500).json({
                error: 'Failed to fetch status.',
                details: error.message || error
            });
        }
    }
    /**
     * Retrieves dataset responses/results for a completed scraping request.
     * GET /api/scrape/results/:id
     */
    static async getScrapeResults(req, res) {
        const id = req.params.id;
        try {
            const response = await db_service_1.prisma.scrapeResponse.findFirst({
                where: { scrapeRequestId: id }
            });
            if (!response) {
                // Check if request exists
                const request = await db_service_1.prisma.scrapeRequest.findUnique({ where: { id } });
                if (!request) {
                    return res.status(404).json({ error: 'Scrape request not found.' });
                }
                return res.status(404).json({
                    error: 'No scraping results found for this request.',
                    status: request.status
                });
            }
            return res.json({
                requestId: id,
                data: response.data,
                createdAt: response.createdAt
            });
        }
        catch (error) {
            return res.status(500).json({
                error: 'Failed to fetch results.',
                details: error.message || error
            });
        }
    }
}
exports.ScrapeController = ScrapeController;
