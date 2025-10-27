import PageContainer from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchAllUsers } from "@/features/dashbnoard/actions/dashboard-auth-actions"
import DashboardTitle from "@/features/dashbnoard/components/dashboard-title"
import { BanIcon, PlusIcon, UsersIcon } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Users'
}
export default async function DashboardUsersPage() {
  const users = await fetchAllUsers()

  const totalUsers = users.length
  const banned = users.filter((user) => user.banned === true).length
  const varified = users.filter((user) => user.emailVerified === true).length

  if (!users) {
    return (
      <PageContainer>
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <div className="text-center">
              <h1 className="font-semibold">No Users found</h1>
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <div className="grid gap-4">
        <div className="flex flex-row items-center justify-between">
          <DashboardTitle title="All Users" description="Manage All Users" />
          <Button asChild className="bg-teal-500">
            <Link href={'/dashboard/users/new'}>
              <PlusIcon />
              <span>Add User</span>
            </Link>
          </Button>
        </div>
        <div className="grid gric-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <UsersIcon className="size-4" />
                <span>Total Users</span>
              </CardTitle>
              <CardDescription className="text-xs">Total number of registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{totalUsers}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <BanIcon className="size-4" />
                <span>No of Banned Users</span>
              </CardTitle>
              <CardDescription className="text-xs">Total number of banned users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{banned}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <UsersIcon className="size-4" />
                <span>Total Varified</span>
              </CardTitle>
              <CardDescription className="text-xs">Total number of vaerified users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{varified}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}

