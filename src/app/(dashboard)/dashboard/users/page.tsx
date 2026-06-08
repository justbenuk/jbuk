import { fetchAllUsers } from "@/actions/UsersActions";
import DashTitle from "@/components/shared/DashTitle";
import { Button } from "@/components/ui/button";
import UsersTable from "@/tables/UsersTable";
import { PlusIcon } from "lucide-react";

export default async function DashboardUsersPage() {
  const users = await fetchAllUsers()

  if (!users) return (
    <div>no users found</div>
  )
  return (
    <div className="grid gap-6">
      <div className="flex flex-row items-center justify-between">
        <DashTitle title="Users" description="All registered users" />
        <Button>
          <PlusIcon />
          <span>Add User</span>
        </Button>
      </div>
      <UsersTable users={users} />
    </div>
  )
}

