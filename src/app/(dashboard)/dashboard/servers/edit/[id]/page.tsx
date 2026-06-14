"use client";

import ClientContainer from "@/components/shared/ClientContainer";
import ErrorCard from "@/components/shared/ErrorCard";
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
import { ServerProps } from "@/features/servers/ServerTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    <ClientContainer>
      <Card>
        <CardHeader>Edit {server?.provider}</CardHeader>
        <CardContent>
          <EditServerForm server={server} />
        </CardContent>
      </Card>
    </ClientContainer>
  );
}
