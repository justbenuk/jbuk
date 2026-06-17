"use client";
import ClientContainer from "@/components/shared/ClientContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import AllServersTable from "@/features/servers/tables/AllServersTable";
import { useEffect, useState } from "react";
import { FetchAllServers } from "@/features/servers/ServerActions";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import { Prisma } from "@prisma/client";
import PageContainer from "@/components/shared/PageContainer";

type ServerProps = Prisma.ServerGetPayload<{
  include: {
    company: true;
    project: true;
  };
}>;

export default function ServerPage() {
  const [loading, setLoading] = useState(true);
  const [servers, setServers] = useState<ServerProps[]>([]);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await FetchAllServers();

      if (response.success) {
        setServers(response.data);
      } else {
        setError("failed to load servers");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorCard message="Failed to load data" />;
  return (
    <PageContainer size="dashboard">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Servers</CardTitle>
            <CardDescription>All Servers</CardDescription>
          </div>
          <Button asChild>
            <Link href={"/dashboard/servers/new"}>
              <PlusIcon />
              <span>Server</span>
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <AllServersTable servers={servers} />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
