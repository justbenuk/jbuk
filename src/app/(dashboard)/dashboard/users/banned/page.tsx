import { Card, CardContent } from "@/components/ui/card"
import { fetchAllbannedUsersAction } from "@/features/dashbnoard/actions/dashboard-auth-actions"
import DashboardTitle from "@/features/dashbnoard/components/dashboard-title"
import AllBannedTable from "@/features/dashbnoard/tables/users/all-banned-table"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Banned Users'
}
export default async function BannedUsersPage() {

  //fetch all users
  const users = await fetchAllbannedUsersAction()

  if (!users) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <h1 className="font-semibold">There are no banned users</h1>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (

    <div className="space-y-8">
      <div className="flex flex-row items-center justify-between">
        <DashboardTitle title="All Users" description="Manage All Users" />
      </div>
      <AllBannedTable users={users} />
    </div>
  )
}


