/*
  Warnings:

  - Added the required column `companyId` to the `server` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `server` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "server" ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL;
