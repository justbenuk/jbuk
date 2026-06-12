import type { Metadata } from 'next';
import ClientContainer from "@/components/shared/ClientContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UserList from '@/features/Authentication/companents/UserList';

export const metadata: Metadata = {
  title: 'Users'
};

export default function UsersPage() {
  return (
    <ClientContainer>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>List of all users</CardDescription>
        </CardHeader>
        <CardContent>
          <UserList />
        </CardContent>
      </Card>
    </ClientContainer>
  )
}

