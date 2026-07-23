"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables before importing services
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const scrape_routes_1 = __importDefault(require("./routes/scrape.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Logging Middleware for incoming requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
// API Routes
app.use('/api', scrape_routes_1.default);
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
