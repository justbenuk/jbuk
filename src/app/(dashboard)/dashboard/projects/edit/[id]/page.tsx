"use client";

import ErrorCard from "@/components/shared/ErrorCard";
import PageContainer from "@/components/shared/PageContainer";
import AddProjectSkeleton from "@/components/skeletons/AddProjectSkeleton";
import EditProjectForm from "@/features/projects/forms/EditProjectForm";
import { fetchProjectById } from "@/features/projects/ProjectActions";
import { Project } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProjectPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await fetchProjectById(id);

      if (response.success && response.data) {
        setProject(response.data);
      } else {
        setError(response.message);
      }
      setLoading(false);
    }
    loadData();
  }, [id]);

  if (loading) return <AddProjectSkeleton />;
  if (error) return <ErrorCard message={error} />;
  if (!project) return <ErrorCard message="Project not found" />;
  return (
    <PageContainer size="dashboard">
      <EditProjectForm project={project} />
    </PageContainer>
  );
}
