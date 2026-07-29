"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function runTest() {
    const port = process.env.PORT || 3000;
    const baseUrl = `http://localhost:${port}/api`;
    // Using a lightweight and fast Apify actor: apify/hello-world
    const actorName = 'apify/hello-world';
    const inputData = {};
    console.log('1. Triggering scrape request via API...');
    try {
        const triggerRes = await fetch(`${baseUrl}/scrape/trigger`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ actorName, inputData })
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
        const maxAttempts = 60; // 5 minutes max
        while (['PENDING', 'RUNNING'].includes(currentStatus) && attempts < maxAttempts) {
            attempts++;
            console.log(`[Attempt ${attempts}] Waiting 5 seconds...`);
            await new Promise(resolve => setTimeout(resolve, 5000));
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
                    console.log('First result item preview:', JSON.stringify(results.data[0]).substring(0, 300) + '...');
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
        console.error('Test failed:', error.message || error);
    }
}
// Wait a moment for server boot if run directly, but we assume it's running
runTest();
