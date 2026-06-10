'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageProps } from "@/types/message-types"
import { AllCommunityModule, ColDef, ICellRendererParams, themeQuartz } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { EyeIcon } from "lucide-react";
import DeleteMessageForm from "../forms/DeleteMessageForm";

export default function MessageTable({ messages, }: { messages: MessageProps[] }) {


  const modules = [AllCommunityModule]
  const columnDefs: ColDef<MessageProps>[] = [
    {
      field: 'name',
      headerName: 'Name',
    }, {
      field: 'email',
      headerName: 'Email'
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone',
    },
    {
      field: 'domain',
      headerName: 'Domain',
    },
    {
      field: 'message',
      headerName: 'Message',
      cellRenderer: ({ data }: ICellRendererParams<MessageProps>) => {
        return (
          <span>{data?.message.slice(0, 20) + '...'}</span>
        )
      }
    }, {
      field: 'createdAt',
      headerName: 'Received',
      valueFormatter: (row) => (
        row.value ? new Date(row.value).toLocaleDateString('en-GB') : ""
      ),
    }, {
      headerName: 'Actions',
      cellRenderer: ({ data }: ICellRendererParams<MessageProps>) => {
        if (!data) return null
        return (
          <div className="flex flex-row items-center space-x-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={'ghost'} className="text-yellow-500 bg-yellow-500/10" size={'icon-xs'}>
                  <EyeIcon />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Message</DialogTitle>
                  <DialogDescription>Message From: {data.name}</DialogDescription>
                  <span className="text-muted-foreground text-sm">Reply To: {data.email}</span>
                </DialogHeader>
                <div>{data.message}</div>
              </DialogContent>
            </Dialog>
            <DeleteMessageForm messageId={data.id} />
          </div>
        )
      }
    }
  ]

  const myTheme = themeQuartz.withParams({
    backgroundColor: "var(--background)",
    foregroundColor: "var(--foreground)",
    borderColor: "var(--border)",
    headerBackgroundColor: "var(--muted)",
  });

  return (
    <AgGridProvider modules={modules}>
      <div>
        <AgGridReact
          domLayout="autoHeight"
          theme={myTheme}
          rowData={messages}
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
