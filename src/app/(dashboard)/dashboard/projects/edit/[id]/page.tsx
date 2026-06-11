'use client'

import ErrorCard from "@/components/shared/ErrorCard"
import AddProjectSkeleton from "@/components/skeletons/AddProjectSkeleton"
import EditProjectForm from "@/features/projects/forms/EditProjectForm"
import { fetchProjectById } from "@/features/projects/ProjectActions"
import { ProjectProps } from "@/features/projects/ProjectTypes"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditProjectPage() {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<ProjectProps>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchProjectById(id)

      if (response.success && response.data) {
        setProject(response.data)
      } else {
        setError(response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <AddProjectSkeleton />
  if (error) return <ErrorCard message={error} />
  if (!project) return <ErrorCard message="Project not found" />
  return (
    <EditProjectForm project={project} />
  )
}
