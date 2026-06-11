'use client'

import ErrorCard from "@/components/shared/ErrorCard"
import ClientProjectsSkeleton from "@/components/skeletons/ClientProjectsSkeleton"
import { Card, CardContent } from "@/components/ui/card"
import { fetchAllProjectsByCompanyId } from "@/features/projects/ProjectActions"
import { ProjectProps } from "@/features/projects/ProjectTypes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ClientProjectList() {

  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<ProjectProps[]>()
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchAllProjectsByCompanyId()

      if (response.success && response.data) {
        setProjects(response.data)
      } else {
        setError(response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <ClientProjectsSkeleton />
  if (error) return <ErrorCard message={error} />
  if (!projects || projects.length === 0) return <ErrorCard message="No Projects Found" />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.slug}`} target="_blank">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4">
              <Image src={project.image} alt={project.title} width={150} height={150} className="rounded-full" />
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              <p className="text-sm">{project.published ? 'Published' : 'Not Published'}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

