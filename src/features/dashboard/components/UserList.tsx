'use client'
import ClientContainer from "@/components/shared/ClientContainer";
import ErrorCard from "@/components/shared/ErrorCard";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import UsersTable from "@/features/dashboard/tables/UsersTable";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../DashboardActions";
import { UserProps } from "@/features/Authentication/AuthenticationTypes";


export default function UserList() {

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
    <UsersTable users={users} />
  )
}
