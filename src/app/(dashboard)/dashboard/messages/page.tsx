import type { Metadata } from 'next';
import ClientContainer from "@/components/shared/ClientContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MessageList from "@/features/messages/components/MessageList";

export const metadata: Metadata = {
  title: 'Messages'
};

export default function DashboardMessagePage() {
  return (
    <ClientContainer>
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
          <CardDescription>All received messages</CardDescription>
        </CardHeader>
        <CardContent>
          <MessageList />
        </CardContent>
      </Card>
    </ClientContainer>
  )
}
