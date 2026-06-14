/*
  Warnings:

  - You are about to drop the column `serverId` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `serverId` on the `project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "company" DROP CONSTRAINT "company_serverId_fkey";

-- DropForeignKey
ALTER TABLE "project" DROP CONSTRAINT "project_serverId_fkey";

-- AlterTable
ALTER TABLE "company" DROP COLUMN "serverId";

-- AlterTable
ALTER TABLE "project" DROP COLUMN "serverId";

-- AddForeignKey
ALTER TABLE "server" ADD CONSTRAINT "server_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "server" ADD CONSTRAINT "server_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
