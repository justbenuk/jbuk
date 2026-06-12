'use client'

import ClientContainer from "@/components/shared/ClientContainer";
import ClientMap from "@/components/maps/ClientMap";
import { useEffect, useState } from "react";
import UserCard from "@/features/client/components/UserCard";
import ErrorCard from "@/components/shared/ErrorCard";
import ProfileSkeleton from "@/features/client/components/ProfileSkeleton";
import CompanyCard from "@/features/client/components/CompanyCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChangePasswordCard from "@/features/client/components/ChangePasswordCard";
import AddCompanyForm from "@/features/client/forms/AddCompanyForm";
import { UserProps } from "@/features/Authentication/AuthenticationTypes";
import { fetchCurrentUser } from "@/actions/AuthActions";

export default function ClientPage() {

  const [user, setUser] = useState<UserProps>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchCurrentUser()

      if (response.success && response.data) {
        setUser(response.data)
      } else {
        setError('Failed to load user data')
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <ClientContainer>
        <ProfileSkeleton />
      </ClientContainer>
    )
  }
  if (error) return <ErrorCard message={error} />
  if (!user) return <ErrorCard message="Failed to load user data" />

  const companies = user?.companies ?? []
  const mapCompany = companies.find((company) => company.long && company.lat) ?? companies[0]

  return (
    <ClientContainer className="grid gap-6">
      <Card className="p-0">
        <CardContent className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 p-0">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <UserCard user={user} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <ClientMap long={mapCompany?.long} lat={mapCompany?.lat} />
          </div>
        </CardContent>

      </Card>
      {!companies.length ? (
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Add your company information</CardDescription>
          </CardHeader>
          <CardContent>
            <AddCompanyForm />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}
      <ChangePasswordCard />
    </ClientContainer>
  )
}
