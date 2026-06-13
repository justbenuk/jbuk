import ClientContainer from "@/components/shared/ClientContainer";
import ClientCompanyList from "@/features/companies/components/ClientComapnyList";

export default function ClientPage() {
  return (
    <ClientContainer className="grid gap-6">
      <ClientCompanyList />
    </ClientContainer>
  );
}
