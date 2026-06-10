'use client'
import ErrorCard from "@/components/shared/ErrorCard";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { MessageProps } from "@/types/message-types";
import { useEffect, useState } from "react";
import MessageTable from "../tables/MessageTable";
import { fetchAllMessages } from "../MessageActions";


export default function MessageList() {
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
    <MessageTable messages={messages} />
  )
}
