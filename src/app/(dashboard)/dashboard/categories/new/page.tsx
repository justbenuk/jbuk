import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddProjectCategoryForm from "@/features/categories/forms/AddProjectCategoryForm";
import PageContainer from "@/components/shared/PageContainer";

export const metadata: Metadata = {
  title: "Add Category",
};
export default function page() {
  return (
    <PageContainer size="dashboard">
      <Card>
        <CardHeader>
          <CardTitle>New Category</CardTitle>
          <CardDescription>Add a new project category</CardDescription>
        </CardHeader>
        <CardContent>
          <AddProjectCategoryForm />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
