/*
  Warnings:

  - You are about to drop the column `additonalMessage` on the `ProjectMessage` table. All the data in the column will be lost.
  - Added the required column `details` to the `ProjectMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectMessage" DROP COLUMN "additonalMessage",
ADD COLUMN     "details" TEXT NOT NULL;
