'use client'
import { fetchAllUsers } from "@/actions/UsersActions";
import ClientContainer from "@/components/shared/ClientContainer";
import DashTitle from "@/components/shared/DashTitle";
import ErrorCard from "@/components/shared/ErrorCard";
import TableSkeleton from "@/components/skeletons/BoxSkeleton";
import { Button } from "@/components/ui/button";
import UsersTable from "@/tables/UsersTable";
import { UserProps } from "@/types/user-types";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";


export default function DashboardUsersPage() {

  const [users, setUsers] = useState<UserProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {

    async function loadData() {
      setLoading(true)
      const response = await fetchAllUsers()

      if (response.success && response.data) {
        setUsers(response.data)
      } else {
        setError('Failed to load users')
      }
      setLoading(false)
    }
    loadData()

  }, [])

  if (loading) {
    return (
      <ClientContainer>
        <TableSkeleton />
      </ClientContainer>
    )
  }
  if (error) return <ErrorCard message={error} />

  return (
    <ClientContainer className="grid gap-6">
      <div className="flex flex-row items-center justify-between">
        <DashTitle title="Users" description="All registered users" />
        <Button>
          <PlusIcon />
          <span>Add User</span>
        </Button>
      </div>
      <UsersTable users={users} />
    </ClientContainer>
  )
}

