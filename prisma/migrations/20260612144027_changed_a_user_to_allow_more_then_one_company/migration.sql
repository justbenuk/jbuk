-- DropIndex
DROP INDEX "company_userId_key";

-- CreateIndex
CREATE INDEX "company_userId_idx" ON "company"("userId");
