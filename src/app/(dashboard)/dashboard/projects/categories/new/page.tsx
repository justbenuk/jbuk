import ClientContainer from "@/components/shared/ClientContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AddProjectCategoryForm from "@/fearures/projects/forms/AddProjectCategoryForm";

export default function page() {
  return (
    <ClientContainer>
      <Card>
        <CardHeader>
          <CardTitle>New Category</CardTitle>
          <CardDescription>Add a new project category</CardDescription>
        </CardHeader>
        <CardContent>
          <AddProjectCategoryForm />
        </CardContent>
      </Card>
    </ClientContainer>
  )
}

