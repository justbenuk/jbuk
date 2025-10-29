'use client'
import GlobalTable from "@/components/table/global-table"
import GlobalTablePagination from "@/components/table/global-table-pagination"
import GlobalTableSearch from "@/components/table/global-table-search"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { MessageProps } from "@/types"
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { EyeIcon, TrashIcon } from "lucide-react"
import { toast } from "sonner"
import { deleteMessageById } from "./contact-actions"

interface MessagesProps {
  messages: MessageProps[]
}

export default function MessagesTable({ messages }: MessagesProps) {

  const data = messages || []
  const columnHelper = createColumnHelper<MessageProps>()

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('subject', {
      cell: (info) => info.getValue()
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: info => {
        return (
          <div className="flex flex-row gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={'outline'} size={'sm'}>
                  <EyeIcon />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>From: {info.row.original.name}</AlertDialogTitle>
                  <AlertDialogDescription>Reply To: {info.row.original.email}</AlertDialogDescription>
                </AlertDialogHeader>
                <span>Subject: {info.row.original.subject}</span>
                <span>Message: {info.row.original.message}</span>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-500" onClick={() => handleDelete(info.row.original.id)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant={'destructive'} size={'sm'} onClick={() => handleDelete(info.row.original.id)}>
              <TrashIcon />
            </Button>
          </div >
        )
      }
    })
  ]

  async function handleDelete(id: string) {
    const { success, message } = await deleteMessageById(id)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20
      }
    }
  })
  return (
    <div>
      <GlobalTableSearch table={table} />
      <GlobalTable table={table} />
      <GlobalTablePagination table={table} />
    </div>
  )
}

