import PageContainer from "@/components/shared/PageContainer";
import CompanyList from "@/features/companies/components/CompanyList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies",
};

export default function CompaniesPage() {
  return (
    <PageContainer size="dashboard">
      <CompanyList />
    </PageContainer>
  );
}
