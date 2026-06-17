import type { Metadata } from "next";
import { AddServerForm } from "@/features/servers/forms/AddServerForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageContainer from "@/components/shared/PageContainer";

export const metadata: Metadata = {
  title: "Add Server",
};

export default async function NewServerForm() {
  return (
    <PageContainer size="dashboard">
      <Card>
        <CardHeader>
          <CardTitle>Add a server</CardTitle>
        </CardHeader>
        <CardContent>
          <AddServerForm />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
