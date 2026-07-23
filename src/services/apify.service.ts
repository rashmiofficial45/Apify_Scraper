import { ApifyClient } from 'apify-client';

const token = process.env.APIFY_TOKEN;
if (!token) {
  throw new Error('APIFY_TOKEN is not configured in the environment variables.');
}

export const apifyClient = new ApifyClient({ token });

export class ApifyService {
  /**
   * Triggers an Apify Actor run asynchronously.
   * @param actorName The actor name or ID (e.g. "apify/web-scraper")
   * @param input The JSON input for the actor
   * @param requestId The local scrape request ID to pass as metadata or in webhook URL
   */
  static async triggerActor(actorName: string, input: any, requestId: string) {
    const webhooks: any[] = [];
    
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
    const run = await apifyClient.actor(actorName).start(input, { webhooks });
    return run;
  }

  /**
   * Fetches the current details and status of an Actor Run.
   * @param runId The ID of the Actor Run
   */
  static async getRunDetails(runId: string) {
    return await apifyClient.run(runId).get();
  }

  /**
   * Fetches dataset items for a finished Run.
   * @param datasetId The ID of the Dataset
   */
  static async getDatasetItems(datasetId: string) {
    const { items } = await apifyClient.dataset(datasetId).listItems();
    return items;
  }
}
