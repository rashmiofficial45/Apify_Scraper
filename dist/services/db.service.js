"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
const prisma_1 = require("../generated/prisma");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is not configured in the environment variables.');
}
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
exports.prisma = new prisma_1.PrismaClient({ adapter });
// Handle graceful shutdown
process.on('beforeExit', async () => {
    await exports.prisma.$disconnect();
    await pool.end();
});
