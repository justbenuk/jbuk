import CreateServerForm from "@/forms/create-server-form";
import PageContainer from "@/components/page-sections/page-container";
export default function NewServer() {
  return (
    <PageContainer>
      <div className="mt-6">
        <CreateServerForm />
      </div>
    </PageContainer>
  );
}
