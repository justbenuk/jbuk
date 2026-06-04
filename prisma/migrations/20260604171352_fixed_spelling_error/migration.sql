/*
  Warnings:

  - You are about to drop the column `dmain` on the `contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contact" DROP COLUMN "dmain",
ADD COLUMN     "domain" TEXT;
