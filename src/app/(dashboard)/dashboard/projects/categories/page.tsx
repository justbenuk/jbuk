'use client'
import { fetchAllCategories } from "@/actions/ProjectActions";
import ClientContainer from "@/components/shared/ClientContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCategoriesTable from "@/fearures/projects/tables/ProjectCategoriesTable";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project, ProjectCategory } from "@prisma/client"
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import Link from "next/link";


type ProjectCategoryRow = ProjectCategory & {
  projects: Project[]
}


export default function CategoriesPage() {

  const [categories, setCategories] = useState<ProjectCategoryRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()



  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchAllCategories()

      if (response.success && response.data) {
        setCategories(response.data)
      } else {
        setError(response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <TableSkeleton />
  if (error) return <ErrorCard message={error} />


  return (
    <ClientContainer>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Categories</CardTitle>
            <CardDescription>All categories</CardDescription>
          </div>
          <Button asChild>
            <Link href={'/dashboard/projects/categories/new'}>
              <PlusIcon />
              <span>Category</span>
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <ProjectCategoriesTable
            categories={categories}
          />
        </CardContent>
      </Card>
    </ClientContainer>
  )
}
