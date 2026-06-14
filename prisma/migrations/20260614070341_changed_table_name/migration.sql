/*
  Warnings:

  - You are about to drop the `Server` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "company" DROP CONSTRAINT "company_serverId_fkey";

-- DropForeignKey
ALTER TABLE "project" DROP CONSTRAINT "project_serverId_fkey";

-- DropTable
DROP TABLE "Server";

-- CreateTable
CREATE TABLE "server" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerUrl" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "server_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "server"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
