"use client";

import ErrorCard from "@/components/shared/ErrorCard";
import PageContainer from "@/components/shared/PageContainer";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EditServerForm } from "@/features/servers/forms/EditServerForm";
import { FetchServerById } from "@/features/servers/ServerActions";
import { Prisma } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type ServerProps = Prisma.ServerGetPayload<{
  include: {
    company: true;
    project: true;
  };
}>;

export default function SingleServerPage() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  const [server, setServer] = useState<ServerProps>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await FetchServerById(id);

      if (response.success && response.data) {
        setServer(response.data);
      } else {
        setError("Failed to fetch server");
      }
      setLoading(false);
    }
    loadData();
  }, [id]);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorCard message={error} />;
  if (!server) return <ErrorCard message="Server not found" />;

  return (
    <PageContainer size="dashboard">
      <Card>
        <CardHeader>
          <CardTitle>Edit Server</CardTitle>
          <CardDescription>Edit details for {server?.provider}</CardDescription>
        </CardHeader>
        <CardContent>
          <EditServerForm server={server} />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
