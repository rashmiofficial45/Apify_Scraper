# Apify Actor Integration Backend Wrapper

A lightweight backend wrapper service built with Node.js, TypeScript, Express, PostgreSQL, and Prisma ORM to trigger, monitor, and store Apify scraper runs.

## Features Covered

1. **Trigger Scraping**: `POST /api/scrape/trigger` starts a generic scrape request.
2. **Instagram Scraper**: `POST /api/scrape/instagram` dedicated wrapper endpoint for Instagram user profile posts scraping.
3. **Retrieval**: `GET /api/scrape/results/:id` retrieves results, and `GET /api/scrape/status/:id` gets status and error logs.
4. **Database Storage**: Stores requests, statuses, responses (scraped datasets), and log details in PostgreSQL database using Prisma ORM.
5. **State Tracking**: Automatically updates status states: `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.
6. **Dual Status Tracking**:
   * **Webhook Listener**: Listens on `POST /api/webhooks/apify` for real-time updates from Apify.
   * **Background Polling Fallback**: Automatically falls back to internal polling, enabling status tracking during local development without public webhooks.

---

## How to Verify It works

Follow these simple steps to verify the installation:

### 1. Run the server (already running in the background)
If you need to start it manually:
```bash
npm run dev
```

### 2. Verify with the built-in E2E script
We have prepared a validation script that runs the `apify/hello-world` actor, polls it, saves state and data in PostgreSQL, and retrieves the result:
```bash
npm run test:e2e
```
*Expected Output:*
* Trigger response containing a `requestId` and `runId`.
* Polls until state changes from `RUNNING` to `COMPLETED`.
* Prints successfully retrieved scraped data preview.

### 3. Verify Instagram Scraper specifically
We have prepared a dedicated script to trigger, poll, and retrieve results for Instagram profile scraping:
```bash
npm run test:instagram
```
*Expected Output:*
* Triggers the `apify/instagram-scraper` actor for username `instagram`.
* Polls until the run is complete and dataset output is written.
* Prints details of the first post (ID, likes, URL, caption).

### 4. Verify via `curl` manually

**Step A: Trigger the scraper**
```bash
curl -X POST http://localhost:3000/api/scrape/trigger \
  -H "Content-Type: application/json" \
  -d '{"actorName": "apify/hello-world", "inputData": {}}'
```
*Save the `requestId` from the JSON response.*

**Step B: Check the status and logs in the database**
```bash
curl http://localhost:3000/api/scrape/status/<requestId>
```

**Step C: Fetch the final scraped results**
```bash
curl http://localhost:3000/api/scrape/results/<requestId>
```

### 4. Inspect DB visually
Open Prisma Studio to inspect the database schema and rows visually:
```bash
npx prisma studio
```
This launches a GUI on `http://localhost:5555` to view `ScrapeRequest`, `ScrapeResponse`, and `ScrapeLog` tables.
