'use client'
import GlobalTable from "@/components/table/global-table"
import GlobalTablePagination from "@/components/table/global-table-pagination"
import GlobalTableSearch from "@/components/table/global-table-search"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserProps } from "@/types"
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import Image from "next/image"
import { banUserAction, deleteUserAction, unbanUserAction } from "../../actions/dashboard-auth-actions"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { BanIcon, TrashIcon } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

interface UserListProps {
  users: UserProps[]
}

export default function AllUsersTable({ users }: UserListProps) {

  const data = users || []
  const columnHelper = createColumnHelper<UserProps>()

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('emailVerified', {
      header: 'Verified',
      cell: (info) => info.getValue() ? (<Badge variant={'outline'} className="border border-green-500 bg-green-500/10 text-green-500">Verified</Badge>) : (<Badge variant={'outline'} className="border border-yellow-500 bg-yellow-500/10 text-yellow-500">Not Verified</Badge>)
    }),
    columnHelper.accessor('image', {
      cell: (info) => <Image src={info.getValue() as string} width={25} height={25} alt="profile image" className="rounded-full" />
    }),
    columnHelper.accessor('createdAt', {
      header: 'Member From',
      cell: (info) => new Date(info.getValue()).toLocaleDateString('en-GB')
    }),
    columnHelper.accessor('role', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('banned', {
      cell: (info) => info.getValue() ? (<Badge variant={'outline'} className="border border-red-500 bg-red-500/10 text-red-500">Banned</Badge>) : (<Badge variant={'secondary'}>Not Banned</Badge>)
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: info => {
        return (
          <div className="flex flex-row items-center gap-2">
            <div>
              {info.row.original.banned === true ? (
                <Tooltip>
                  <TooltipTrigger asChild value={'ban'}>
                    <Button variant={'destructive'} size={'sm'} onClick={() => unbanUserAction(info.row.original.id)}>
                      <BanIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Un Ban</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild value={'ban'}>
                    <Button variant={'outline'} size={'sm'} onClick={() => banUserAction(info.row.original.id)}>
                      <BanIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ban</p>
                  </TooltipContent>
                </Tooltip>

              )
              }
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={'destructive'} size={'sm'}>
                  <TrashIcon />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => deleteUserAction(info.row.original.id)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div >
        )
      }
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 30
      }
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center justify-between">
          <GlobalTableSearch table={table} />
          <span className="text-xs font-semibold">Total Users {users.length}</span>
        </div>
        <GlobalTable table={table} />
        <div>
          <GlobalTablePagination table={table} />
        </div>
      </CardContent>
    </Card>
  )
}
