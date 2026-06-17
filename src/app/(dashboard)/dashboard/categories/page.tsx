import PageContainer from "@/components/shared/PageContainer";
import ProjectCategoriesList from "@/features/categories/components/ProjectCategoriesList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  return (
    <PageContainer size="dashboard">
      <ProjectCategoriesList />
    </PageContainer>
  );
}
