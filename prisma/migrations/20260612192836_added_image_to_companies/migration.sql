-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "companyId" TEXT;

-- AlterTable
ALTER TABLE "company" ADD COLUMN     "image" TEXT;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
