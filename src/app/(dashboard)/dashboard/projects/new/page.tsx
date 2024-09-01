import CreateProjectForm from "@/forms/create-project-form";
import PageContainer from "@/components/page-sections/page-container";
export default function NewProject() {
  return (
    <PageContainer>
      <div className="mt-6">
        <CreateProjectForm />
      </div>
    </PageContainer>
  );
}
