"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function runInstagramTest() {
    const port = process.env.PORT || 3000;
    const baseUrl = `http://localhost:${port}/api`;
    // Scrape a public Instagram username
    const usernames = ['instagram'];
    const resultsType = 'posts';
    const resultsLimit = 1;
    console.log('1. Triggering Instagram scrape request via API...');
    try {
        const triggerRes = await fetch(`${baseUrl}/scrape/instagram`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usernames, resultsType, resultsLimit })
        });
        if (!triggerRes.ok) {
            const err = await triggerRes.json();
            throw new Error(`Trigger failed: ${JSON.stringify(err)}`);
        }
        const { requestId, status, runId } = await triggerRes.json();
        console.log('Trigger response:', { requestId, status, runId });
        console.log('2. Polling status until completed or failed...');
        let currentStatus = status;
        let attempts = 0;
        const maxAttempts = 120; // 10 minutes max (Instagram actor can take longer to boot and process)
        while (['PENDING', 'RUNNING'].includes(currentStatus) && attempts < maxAttempts) {
            attempts++;
            console.log(`[Attempt ${attempts}] Waiting 10 seconds...`);
            await new Promise(resolve => setTimeout(resolve, 10000));
            const statusRes = await fetch(`${baseUrl}/scrape/status/${requestId}`);
            if (!statusRes.ok) {
                throw new Error(`Status check failed with HTTP ${statusRes.status}`);
            }
            const requestDetails = await statusRes.json();
            currentStatus = requestDetails.status;
            console.log(`[Attempt ${attempts}] Current status in DB: ${currentStatus}`);
            if (currentStatus === 'COMPLETED') {
                console.log('3. Scrape completed! Fetching results...');
                const resultsRes = await fetch(`${baseUrl}/scrape/results/${requestId}`);
                if (!resultsRes.ok) {
                    throw new Error(`Fetch results failed with HTTP ${resultsRes.status}`);
                }
                const results = await resultsRes.json();
                console.log(`Successfully fetched results! Found ${results.data?.length || 0} items.`);
                if (results.data && results.data.length > 0) {
                    console.log('First Instagram post preview:');
                    const post = results.data[0];
                    console.log({
                        id: post.id,
                        type: post.type,
                        shortCode: post.shortCode,
                        caption: post.caption ? post.caption.substring(0, 100) + '...' : 'No caption',
                        url: post.url,
                        likesCount: post.likesCount
                    });
                }
                break;
            }
            if (currentStatus === 'FAILED') {
                console.log('Scrape failed. Logs in DB:');
                console.log(JSON.stringify(requestDetails.logs, null, 2));
                break;
            }
        }
    }
    catch (error) {
        console.error('Instagram test failed:', error.message || error);
    }
}
runInstagramTest();
