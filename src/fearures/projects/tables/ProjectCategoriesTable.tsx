'use client'

import type { Project, ProjectCategory } from "@prisma/client"
import { useMemo, useState } from "react"
import { AllCommunityModule, ColDef, themeQuartz } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import TableSearch from "@/components/shared/TableSearch";

type ProjectCategoryRow = ProjectCategory & {
  projects: Project[]
}



export default function ProjectCategoriesTable({ categories }: { categories: ProjectCategoryRow[] }) {

  const [search, setSearch] = useState('')
  const modules = [AllCommunityModule]


  const columnDefs = useMemo<ColDef<ProjectCategoryRow>[]>(() => [
    {
      field: 'name',
      headerName: 'Name'
    },
    {
      field: 'slug',
      headerName: 'Slug'
    },
    {
      field: 'description',
      headerName: 'Description'
    },
    {
      headerName: 'No of projects',
      valueGetter: (row) => row.data?.projects.length ?? 0,
    },
    {
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
          <TableSearch title="Search categories" search={search} setSearch={setSearch} />
        </div>
        <AgGridReact
          quickFilterText={search}
          defaultColDef={defaultColDef}
          domLayout="autoHeight"
          theme={myTheme}
          rowData={categories}
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
