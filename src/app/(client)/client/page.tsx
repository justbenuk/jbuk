'use client'

import { fetchCurrentUser } from "@/actions/AuthActions";
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

export default function ClientPage() {

  const [user, setUser] = useState<any>()
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

  return (
    <ClientContainer className="grid gap-6">
      <Card className="p-0">
        <CardContent className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 p-0">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <UserCard user={user} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <ClientMap long={user?.company?.long} lat={user?.company?.lat} />
          </div>
        </CardContent>

      </Card>
      {!user.company ? (
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
        <CompanyCard company={user.company} />
      )}
      <ChangePasswordCard />
    </ClientContainer>
  )
}
