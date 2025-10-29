import DashbordContainer from "@/components/dashboard-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { fetchAllMessage } from "@/features/contant/contact-actions"
import MessagesTable from "@/features/contant/messages-table"
import DashboardTitle from "@/features/dashbnoard/components/dashboard-title"
import { MessageCircle } from "lucide-react"

export default async function MessagesPage() {

  const messages = await fetchAllMessage()

  if (messages.length === 0 || !messages) {
    return (
      <Card>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant={'icon'} className="bg-teal-500 text-white">
                <MessageCircle />
              </EmptyMedia>
              <EmptyTitle>No Messages Yet</EmptyTitle>
              <EmptyDescription>No one has left you any messages</EmptyDescription>
            </EmptyHeader>
          </Empty>

        </CardContent>
      </Card>
    )
  }

  return (
    <DashbordContainer className="mt-4 space-y-4">
      <DashboardTitle title="Messages" description="All messages sent via the contact form" />
      <Card>
        <CardHeader>
          <CardTitle>All Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <MessagesTable messages={messages} />
        </CardContent>
      </Card>
    </DashbordContainer>
  )
}

