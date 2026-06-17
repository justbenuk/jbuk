"use client";
import ClientContainer from "@/components/shared/ClientContainer";
import ErrorCard from "@/components/shared/ErrorCard";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../AuthenticationActions";
import UsersTable from "../tables/UsersTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@prisma/client";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await fetchAllUsers();

      if (response.success && response.data) {
        setUsers(response.data);
      } else {
        setError("Failed to load users");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <ClientContainer>
        <TableSkeleton />
      </ClientContainer>
    );
  }
  if (error) return <ErrorCard message={error} />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>All registered users</CardDescription>
      </CardHeader>
      <CardContent>
        <UsersTable users={users} />
      </CardContent>
    </Card>
  );
}
