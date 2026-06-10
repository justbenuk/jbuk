/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `project-category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `project-category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project-category" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "project-category_slug_key" ON "project-category"("slug");
