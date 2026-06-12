'use client'
import ClientContainer from "@/components/shared/ClientContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project, ProjectCategory } from "@prisma/client"
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import Link from "next/link";
import ProjectCategoriesTable from "../tables/ProjectCategoriesTable";
import { fetchAllProjectCategories } from "../CategoryActions";


type ProjectCategoryRow = ProjectCategory & {
  projects: Project[]
}


export default function ProjectCategoriesList() {

  const [categories, setCategories] = useState<ProjectCategoryRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()



  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchAllProjectCategories()

      if (response.success && response.data) {
        setCategories(response.data)
      } else {
        setError(response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return (
    < ClientContainer >
      <Card>
        <CardContent>
          <TableSkeleton />
        </CardContent>
      </Card>
    </ClientContainer >
  )
  if (error) return <ErrorCard message={error} />


  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Project Categories</CardTitle>
          <CardDescription>Add or make changes to Project Categories</CardDescription>
        </div>
        <Button asChild>
          <Link href={'/dashboard/categories/new'}>
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
  )
}
