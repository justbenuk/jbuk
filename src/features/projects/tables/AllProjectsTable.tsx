import TableSearch from "@/components/shared/TableSearch";
import { AllCommunityModule, ColDef, ICellRendererParams, themeQuartz } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ProjectProps } from "../ProjectTypes";
import DeleteProjectForm from "../forms/DeleteProjectForm";
import Link from "next/link";
import { EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function AllProjectsTable({ projects }: { projects: ProjectProps[] }) {
  const modules = [AllCommunityModule]
  const [search, setSearch] = useState('')
  const columnDefs = useMemo<ColDef<ProjectProps>[]>(() => [
    {
      field: 'image',
      headerName: 'Featured Image',
      cellRenderer: (row: ICellRendererParams) => <Image src={row.data.image} alt="featured-image" width={100} height={100} className="size-8 rounded-full items-center" />
    },
    {
      field: 'title',
      headerName: 'Title'
    },
    {
      field: 'slug',
      headerName: 'Slug'
    },
    {
      field: 'featured',
      headerName: 'Featured'
    },
    {
      field: 'published',
      headerName: 'Published'
    }, {
      field: 'createdAt',
      headerName: 'Created'
    },
    {
      field: 'updatedAt',
      headerName: 'Updated'
    },
    {
      headerName: 'Actions',
      cellRenderer: (row: ICellRendererParams) => (
        <div className="flex flex-row items-center gap-2">
          <div>
            <Button asChild variant={'outline'} size={'icon-xs'}>
              <Link href={`/dashboard/projects/edit/${row.data.id}`} className="text-yellow-500">
                <EditIcon />
              </Link>
            </Button>
          </div>
          <DeleteProjectForm projectId={row.data.id} />
        </div>
      )
    }
  ], [])

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
          <TableSearch title="Search projects..." search={search} setSearch={setSearch} />
        </div>
        <AgGridReact
          quickFilterText={search}
          domLayout="autoHeight"
          theme={myTheme}
          rowData={projects}
          columnDefs={columnDefs}
          getRowId={(row) => row.data.id}
          paginationPageSize={20}
          autoSizeStrategy={{
            type: "fitGridWidth",
          }}
        />
      </div>
    </AgGridProvider>)
}

