'use client'
import GlobalTable from "@/components/table/global-table"
import GlobalTablePagination from "@/components/table/global-table-pagination"
import GlobalTableSearch from "@/components/table/global-table-search"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { NextStepsProps } from "@/types"
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { EyeIcon, TrashIcon } from "lucide-react"
import { toast } from "sonner"
import { deleteMessageById, deleteNBextStepsById } from "./contact-actions"

interface NextStepsListProps {
  nextSteps: NextStepsProps[]
}

export default function NextStepsTable({ nextSteps }: NextStepsListProps) {

  const data = nextSteps || []
  const columnHelper = createColumnHelper<NextStepsProps>()

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('type', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('budget', {
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
                <span>Subject: {info.row.original.budget}</span>
                <span>Message: {info.row.original.type}</span>
                <span>Message: {info.row.original.details}</span>
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
    const { success, message } = await deleteNBextStepsById(id)

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

