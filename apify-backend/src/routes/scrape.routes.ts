import { Router } from 'express';
import { ScrapeController } from '../controllers/scrape.controller';
import { WebhookController } from '../controllers/webhook.controller';

const router = Router();

// Trigger a scraping request
router.post('/scrape/trigger', ScrapeController.triggerScrape);

// Trigger Instagram scraping request
router.post('/scrape/instagram', ScrapeController.triggerInstagramScrape);

// Check scraping request status and logs
router.get('/scrape/status/:id', ScrapeController.getScrapeStatus);

// Fetch scraping dataset results
router.get('/scrape/results/:id', ScrapeController.getScrapeResults);

// Fetch all scraping requests
router.get('/scrape/requests', ScrapeController.getAllScrapeRequests);

// Handle webhooks from Apify
router.post('/webhooks/apify', WebhookController.handleWebhook);

export default router;
