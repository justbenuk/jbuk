import TableSearch from "@/components/shared/TableSearch";
import { ProjectProps } from "@/types/project-types";
import { AllCommunityModule, ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import Image from "next/image";
import { useMemo, useState } from "react";


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
      headerName: 'Actions'
    }
  ], [])


  return (
    <AgGridProvider modules={modules}>
      <div className="grid gap-6">
        <div className="flex flex-row items-end-end md:w-1/2">
          <TableSearch title="Search projects..." search={search} setSearch={setSearch} />
        </div>
        <AgGridReact
          quickFilterText={search}
          domLayout="autoHeight"
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

