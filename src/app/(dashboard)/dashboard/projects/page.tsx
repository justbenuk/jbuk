'use client'
import ClientContainer from "@/components/shared/ClientContainer";
import ErrorCard from "@/components/shared/ErrorCard";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchAllProjects } from "@/features/projects/ProjectActions";
import { ProjectProps } from "@/features/projects/ProjectTypes";
import AllProjectsTable from '@/features/projects/tables/AllProjectsTable';
import { useEffect, useState } from "react";


export default function ProjectsPage() {

  const [projects, setProjects] = useState<ProjectProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      const response = await fetchAllProjects()

      if (response.success && response.projects) {
        setProjects(response.projects)
      } else {
        setError(response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (error) return <ErrorCard message={error} />
  if (loading) return (
    <ClientContainer>
      <TableSkeleton />
    </ClientContainer>
  )

  return (
    <ClientContainer>
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>All projects</CardDescription>
        </CardHeader>
        <CardContent>
          <AllProjectsTable projects={projects} />
        </CardContent>
      </Card>
    </ClientContainer>
  )
}
