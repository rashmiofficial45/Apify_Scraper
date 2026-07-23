import dotenv from 'dotenv';
// Load environment variables before importing services
dotenv.config();

import express from 'express';
import cors from 'cors';
import scrapeRoutes from './routes/scrape.routes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware for incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api', scrapeRoutes);

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Start Server
app.listen(port, () => {
  console.log(`=================================================`);
  console.log(`Apify Integration Backend listening on port ${port}`);
  console.log(`Environment:`);
  console.log(`- PORT: ${port}`);
  console.log(`- Database URL set: ${!!process.env.DATABASE_URL}`);
  console.log(`- Apify Token configured: ${!!process.env.APIFY_TOKEN}`);
  console.log(`=================================================`);
});
