'use client'
import { UserProps } from "@/types/user-types";
import { AllCommunityModule, ColDef, ICellRendererParams, themeQuartz } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { CheckIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import TableSearch from "@/components/shared/TableSearch";

export default function UsersTable({ users }: { users: UserProps[] }) {

  const modules = [AllCommunityModule]
  const [search, setSearch] = useState("");
  const columnDefs = useMemo<ColDef<UserProps>[]>(() => [
    {
      field: 'image',
      headerName: 'Image',
      cellRenderer: (row: ICellRendererParams<UserProps>) => (
        <div className="flex h-full items-center">
          <Image src={row.value || '/assets/profile.png'} alt="profile pic" width={30} height={30} className="rounded-full" />
        </div>
      )
    },
    {
      field: 'name',
      headerName: 'Name'
    }, {
      field: 'email',
      headerName: 'Email'
    },
    {
      field: 'emailVerified',
      headerName: 'Email Verified',
      cellRenderer: (row: ICellRendererParams<UserProps>) => (
        <div className="flex h-full items-center">
          {row.value ? <CheckIcon className="size-5" /> : <XIcon className="size-5" />}
        </div>
      )
    }, {
      field: 'role',
      headerName: 'Role',
      cellRenderer: (row: ICellRendererParams<UserProps>) => (
        <span className="capitalize">{row.value}</span>
      )
    },
    {
      field: 'createdAt',
      headerName: 'Registered',
      cellRenderer: (row: ICellRendererParams<UserProps>) => (
        <span>{row.value ? format(row.value, 'Pp', { locale: enGB }) : ''}</span>
      )
    }, {
      headerName: 'Actions'
    }
  ], [])

  const defaultColDef = {
  sortable: true,
  filter: true,
};

  const myTheme = themeQuartz.withParams({
    backgroundColor: "var(--background)",
    foregroundColor: "var(--foreground)",
    borderColor: "var(--border)",
    headerBackgroundColor: "var(--muted)",
  });

  return (
    <AgGridProvider modules={modules}>
      <div className="grid gap-6">
        <div className="flex flex-row items-end-end md:w-1/2">
        <TableSearch title="Search users..." search={search} setSearch={setSearch} />
        </div>
        <AgGridReact
        quickFilterText={search}
        defaultColDef={defaultColDef}
          domLayout="autoHeight"
          theme={myTheme}
          rowData={users}
          columnDefs={columnDefs}
          getRowId={(row) => row.data.id}
          paginationPageSize={20}
          autoSizeStrategy={{
            type: "fitGridWidth",
          }}
        />
      </div>
    </AgGridProvider>
  )
}
