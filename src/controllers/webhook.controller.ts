import { Request, Response } from 'express';
import { prisma } from '../services/db.service';
import { ApifyService } from '../services/apify.service';

export class WebhookController {
  /**
   * Receives incoming webhook events from Apify.
   * POST /api/webhooks/apify
   */
  static async handleWebhook(req: Request, res: Response) {
    const { requestId } = req.query;
    const payload = req.body;

    console.log('Received Apify Webhook:', { requestId, payload });

    if (!requestId || typeof requestId !== 'string') {
      return res.status(400).json({ error: 'requestId query parameter is required.' });
    }

    try {
      // Find the existing scraping request
      const scrapeRequest = await prisma.scrapeRequest.findUnique({
        where: { id: requestId }
      });

      if (!scrapeRequest) {
        console.warn(`Scrape request not found for webhook: ${requestId}`);
        return res.status(404).json({ error: 'Scrape request not found.' });
      }

      // Check if the request is already in a terminal state
      if (['COMPLETED', 'FAILED'].includes(scrapeRequest.status)) {
        console.log(`Scrape request ${requestId} is already in terminal state ${scrapeRequest.status}. Skipping.`);
        return res.json({ message: 'Request already completed.' });
      }

      // Detect event type and event data structure
      const eventType = payload.eventType; // e.g. "ACTOR.RUN.SUCCEEDED", "ACTOR.RUN.FAILED"
      const eventData = payload.eventData || {};
      const runId = eventData.actorRunId || eventData.runId;
      const datasetId = eventData.defaultDatasetId;

      if (eventType === 'ACTOR.RUN.SUCCEEDED') {
        if (!datasetId) {
          throw new Error('No defaultDatasetId provided in the webhook payload.');
        }

        // Fetch results from dataset
        const items = await ApifyService.getDatasetItems(datasetId);

        // Update database: Save status, results, and logs
        await prisma.scrapeRequest.update({
          where: { id: requestId },
          data: {
            status: 'COMPLETED',
            datasetId,
            runId: runId || scrapeRequest.runId,
            responses: {
              create: {
                data: items as any
              }
            },
            logs: {
              create: {
                level: 'INFO',
                message: `Webhook: Scrape run succeeded. Downloaded ${items.length} items.`
              }
            }
          }
        });

        console.log(`Scrape request ${requestId} updated to COMPLETED via webhook.`);
      } else {
        // Failed, aborted, timed out, etc.
        await prisma.scrapeRequest.update({
          where: { id: requestId },
          data: {
            status: 'FAILED',
            runId: runId || scrapeRequest.runId,
            datasetId: datasetId || scrapeRequest.datasetId,
            logs: {
              create: {
                level: 'ERROR',
                message: `Webhook: Scrape run finished with event: ${eventType}`
              }
            }
          }
        });

        console.log(`Scrape request ${requestId} updated to FAILED via webhook: ${eventType}`);
      }

      return res.json({ message: 'Webhook processed successfully.' });
    } catch (error: any) {
      console.error('Error processing webhook:', error);
      
      // Attempt to log the error in the DB for visibility
      try {
        await prisma.scrapeRequest.update({
          where: { id: requestId as string },
          data: {
            logs: {
              create: {
                level: 'ERROR',
                message: `Webhook processing error: ${error.message || error}`
              }
            }
          }
        });
      } catch (dbError) {
        console.error('Failed to log webhook error to database:', dbError);
      }

      return res.status(500).json({
        error: 'Failed to process webhook.',
        details: error.message || error
      });
    }
  }
}
