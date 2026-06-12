'use client'

import ClientContainer from "@/components/shared/ClientContainer"
import ErrorCard from "@/components/shared/ErrorCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CompanyProps } from "@/features/client/ClientTypes"
import { fetchCompanyById } from "@/features/companies/CompanyActions"
import EditCompanyForm from "@/features/companies/forms/EditCompanyForm"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditCompanyPage() {

  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState(true)
  const [company, setCompany] = useState<CompanyProps>()
  const [error, setError] = useState<string | null>()


  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchCompanyById(id)

      if (response.success && response.data) {
        setLoading(false)
        setCompany(response.data)
      } else {
        setError('Failed to fetch company')
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <p>loading</p>
  if (error) return <ErrorCard message="Failed to load company" />
  if (!company) return <ErrorCard message="No Company found" />
  return (
    <ClientContainer>
      <Card>
        <CardHeader>
          <CardTitle>Edit </CardTitle>
          <CardDescription>Edit current company</CardDescription>
        </CardHeader>
        <CardContent>
          <EditCompanyForm company={company} />
        </CardContent>
      </Card>
    </ClientContainer>
  )
}

