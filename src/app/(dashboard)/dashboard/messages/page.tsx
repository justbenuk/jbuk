import DashbordContainer from "@/components/dashboard-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { isAdminAction } from "@/features/auth/auth-actions"
import { fetchAllMessage } from "@/features/contant/contact-actions"
import MessagesTable from "@/features/contant/messages-table"
import NextStepsTable from "@/features/contant/next-steps-table"
import DashboardTitle from "@/features/dashbnoard/components/dashboard-title"

export default async function MessagesPage() {
  await isAdminAction()
  const [messages, nextSteps] = await fetchAllMessage()
  return (
    <DashbordContainer className="mt-4 space-y-4">
      <DashboardTitle title="All Messages" description="All messages sent via the contact form" />
      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <MessagesTable messages={messages} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <NextStepsTable nextSteps={nextSteps} />
        </CardContent>
      </Card>
    </DashbordContainer>
  )
}

