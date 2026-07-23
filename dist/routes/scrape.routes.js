"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scrape_controller_1 = require("../controllers/scrape.controller");
const webhook_controller_1 = require("../controllers/webhook.controller");
const router = (0, express_1.Router)();
// Trigger a scraping request
router.post('/scrape/trigger', scrape_controller_1.ScrapeController.triggerScrape);
// Trigger Instagram scraping request
router.post('/scrape/instagram', scrape_controller_1.ScrapeController.triggerInstagramScrape);
// Check scraping request status and logs
router.get('/scrape/status/:id', scrape_controller_1.ScrapeController.getScrapeStatus);
// Fetch scraping dataset results
router.get('/scrape/results/:id', scrape_controller_1.ScrapeController.getScrapeResults);
// Handle webhooks from Apify
router.post('/webhooks/apify', webhook_controller_1.WebhookController.handleWebhook);
exports.default = router;
