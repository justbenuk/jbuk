'use client'

import BackButton from "@/components/shared/BackButton"
import ClientContainer from "@/components/shared/ClientContainer"
import ErrorCard from "@/components/shared/ErrorCard"
import CategorySkeleton from "@/components/skeletons/CategorySkeleton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchProjectCategoryById } from "@/features/categories/CategoryActions"
import { CategoryProps } from "@/features/categories/CategoryValidationSchema"
import EditProjectCategoryForm from "@/features/projects/forms/EditprojectCategoryForm"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditCategoryPage() {
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState<CategoryProps | null>(null)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      const response = await fetchProjectCategoryById(id)

      if (response.success && response.data) {
        setCategory(response.data)
      } else {
        setError(response.success ? 'Category not found' : response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return (<CategorySkeleton />)
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
