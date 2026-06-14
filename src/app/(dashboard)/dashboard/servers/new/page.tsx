import type { Metadata } from "next";
import ClientContainer from "@/components/shared/ClientContainer";
import { AddServerForm } from "@/features/servers/forms/AddServerForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Add Server",
};

export default async function NewServerForm() {
  return (
    <ClientContainer>
      <Card>
        <CardHeader>
          <CardTitle>Add a server</CardTitle>
        </CardHeader>
        <CardContent>
          <AddServerForm />
        </CardContent>
      </Card>
    </ClientContainer>
  );
}
