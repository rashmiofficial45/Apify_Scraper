-- CreateTable
CREATE TABLE "ScrapeRequest" (
    "id" TEXT NOT NULL,
    "actorName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "inputData" JSONB NOT NULL,
    "runId" TEXT,
    "datasetId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScrapeRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScrapeResponse" (
    "id" TEXT NOT NULL,
    "scrapeRequestId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScrapeResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScrapeLog" (
    "id" TEXT NOT NULL,
    "scrapeRequestId" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScrapeLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScrapeResponse" ADD CONSTRAINT "ScrapeResponse_scrapeRequestId_fkey" FOREIGN KEY ("scrapeRequestId") REFERENCES "ScrapeRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScrapeLog" ADD CONSTRAINT "ScrapeLog_scrapeRequestId_fkey" FOREIGN KEY ("scrapeRequestId") REFERENCES "ScrapeRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
