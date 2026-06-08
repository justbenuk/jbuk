import { fetchAllMessages } from "@/actions/MessageActions";
import DashTitle from "@/components/shared/DashTitle";
import MessageTable from "@/tables/MessageTable";

export const dynamic = "force-dynamic";


export default async function DashboardMessagePage() {
  const messages = await fetchAllMessages()

  return (
    <div className="grid gap-6">
      <DashTitle title="Messages" description="All messages received from the contact form" />
      <MessageTable messages={messages} />
    </div>
  )
}

