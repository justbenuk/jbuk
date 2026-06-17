import type { Metadata } from "next";

import PageContainer from "@/components/shared/PageContainer";
import AddProjectForm from "@/features/projects/forms/AddProjectForm";

export const metadata: Metadata = {
  title: "Add Project",
};

export default function NewProjectPage() {
  return (
    <PageContainer size="dashboard">
      <AddProjectForm />
    </PageContainer>
  );
}
