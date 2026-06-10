'use client'

import { fetchCategoryById } from "@/actions/ProjectActions"
import BackButton from "@/components/shared/BackButton"
import ClientContainer from "@/components/shared/ClientContainer"
import ErrorCard from "@/components/shared/ErrorCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import EditProjectCategoryForm from "@/fearures/projects/forms/EditprojectCategoryForm"
import { CategoryProps } from "@/types/CategoryProps"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditCategoryPage() {
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState<CategoryProps | null>(null)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      const response = await fetchCategoryById(id)

      if (response.success && response.data) {
        setCategory(response.data)
      } else {
        setError(response.success ? 'Category not found' : response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return (<ClientContainer >
    <Card>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Skeleton className="h-5 w-30" />
          <Skeleton className="h-5 w-1/2" />
        </div>
        <div className="grid gap-2">
          <Skeleton className="h-5 w-30" />
          <Skeleton className="h-48 w-1/2" />
        </div>
      </CardContent>
    </Card>
  </ClientContainer>)


  if (error) return <ErrorCard message={error} />
  if (!category) return <ErrorCard message="Category not found" />
  return (
    <ClientContainer>
      <BackButton link={'/dashboard/projects/categories'} />
      <Card>
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
          <CardDescription>Edit above category</CardDescription>
        </CardHeader>
        <CardContent>
          <EditProjectCategoryForm category={category} />
        </CardContent>
      </Card>
    </ClientContainer>
  )
}
