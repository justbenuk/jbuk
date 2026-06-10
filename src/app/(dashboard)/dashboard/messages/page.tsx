'use client'
import { fetchAllMessages } from "@/actions/MessageActions";
import ClientContainer from "@/components/shared/ClientContainer";
import DashTitle from "@/components/shared/DashTitle";
import ErrorCard from "@/components/shared/ErrorCard";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import MessageTable from "@/fearures/dashboard/tables/MessageTable";
import { MessageProps } from "@/types/message-types";
import { useEffect, useState } from "react";


export default function DashboardMessagePage() {
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchAllMessages()

      if (response.success && response.data) {
        setMessages(response.data)
      } else {
        setError('Failed to load messages')
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <TableSkeleton />
  if (error) return <ErrorCard message={error} />


  return (
    <ClientContainer className="grid gap-6">
      <DashTitle title="Messages" description="All messages received from the contact form" />
      <MessageTable messages={messages} />
    </ClientContainer>
  )
}

