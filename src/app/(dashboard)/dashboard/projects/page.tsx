"use client";
import ErrorCard from "@/components/shared/ErrorCard";
import PageContainer from "@/components/shared/PageContainer";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchAllProjects } from "@/features/projects/ProjectActions";
import AllProjectsTable from "@/features/projects/tables/AllProjectsTable";
import { Project } from "@prisma/client";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      const response = await fetchAllProjects();

      if (response.success && response.projects) {
        setProjects(response.projects);
      } else {
        setError(response.message);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (error) return <ErrorCard message={error} />;
  if (loading) <TableSkeleton />;

  return (
    <PageContainer size="dashboard">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Projects</CardTitle>
            <CardDescription>All projects</CardDescription>
          </div>
          <Button asChild>
            <Link href={"/dashboard/projects/new"}>
              <PlusIcon />
              <span>Project</span>
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <AllProjectsTable projects={projects} />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
