import DashbordContainer from "@/components/dashboard-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchAllMessage } from "@/features/contant/contact-actions"
import DashboardTitle from "@/features/dashbnoard/components/dashboard-title"

export default async function MessagesPage() {

  const messages = await fetchAllMessage()
  console.log(messages)
  return (
    <DashbordContainer className="mt-4 space-y-4">
      <DashboardTitle title="Messages" description="All messages sent via the contact form" />
      <Card>
        <CardHeader>
          <CardTitle>All Messages</CardTitle>
        </CardHeader>
        <CardContent>Table goes here</CardContent>
      </Card>
    </DashbordContainer>
  )
}

