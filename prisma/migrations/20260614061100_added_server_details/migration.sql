-- AlterTable
ALTER TABLE "company" ADD COLUMN     "serverId" TEXT;

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "serverId" TEXT;

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerUrl" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
