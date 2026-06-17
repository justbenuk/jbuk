import PageContainer from "@/components/shared/PageContainer";
import ClientCompanyList from "@/features/companies/components/ClientComapnyList";

export default function ClientPage() {
  return (
    <PageContainer size="dashboard">
      <ClientCompanyList />
    </PageContainer>
  );
}
