"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApifyService = exports.apifyClient = void 0;
const apify_client_1 = require("apify-client");
const token = process.env.APIFY_TOKEN;
if (!token) {
    throw new Error('APIFY_TOKEN is not configured in the environment variables.');
}
exports.apifyClient = new apify_client_1.ApifyClient({ token });
class ApifyService {
    /**
     * Triggers an Apify Actor run asynchronously.
     * @param actorName The actor name or ID (e.g. "apify/web-scraper")
     * @param input The JSON input for the actor
     * @param requestId The local scrape request ID to pass as metadata or in webhook URL
     */
    static async triggerActor(actorName, input, requestId) {
        const webhooks = [];
        // If a public server URL is configured, attach a webhook for state changes
        const publicUrl = process.env.PUBLIC_SERVER_URL;
        if (publicUrl) {
            webhooks.push({
                eventTypes: [
                    'ACTOR.RUN.SUCCEEDED',
                    'ACTOR.RUN.FAILED',
                    'ACTOR.RUN.TIMED_OUT',
                    'ACTOR.RUN.ABORTED',
                ],
                requestUrl: `${publicUrl}/api/webhooks/apify?requestId=${requestId}`,
                // Optional payload template to receive details
                payloadTemplate: `{
          "eventType": {{eventType}},
          "eventData": {
            "actorId": {{eventData.actorId}},
            "actorRunId": {{eventData.actorRunId}},
            "defaultDatasetId": {{eventData.defaultDatasetId}}
          }
        }`,
            });
        }
        // Start the actor run asynchronously
        const run = await exports.apifyClient.actor(actorName).start(input, { webhooks });
        return run;
    }
    /**
     * Fetches the current details and status of an Actor Run.
     * @param runId The ID of the Actor Run
     */
    static async getRunDetails(runId) {
        return await exports.apifyClient.run(runId).get();
    }
    /**
     * Fetches dataset items for a finished Run.
     * @param datasetId The ID of the Dataset
     */
    static async getDatasetItems(datasetId) {
        const { items } = await exports.apifyClient.dataset(datasetId).listItems();
        return items;
    }
}
exports.ApifyService = ApifyService;
