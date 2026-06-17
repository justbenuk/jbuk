import PageContainer from "@/components/shared/PageContainer";
import AddCompanyForm from "@/features/companies/forms/AddCompanyForm";

export default function ClientCompaniesPage() {
  return (
    <PageContainer size="dashboard">
      <AddCompanyForm />
    </PageContainer>
  );
}
