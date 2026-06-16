import TableSearch from "@/components/shared/TableSearch";
import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
  themeQuartz,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { MediaProps } from "../MediaTypes";

export default function AllMediaTable({ medias }: { medias: MediaProps[] }) {
  const modules = [AllCommunityModule];
  const [search, setSearch] = useState("");
  const columnDefs = useMemo<ColDef<MediaProps>[]>(
    () => [
      {
        field: "url",
        headerName: "Image",
        cellRenderer: (row: ICellRendererParams) => (
          <Image
            src={row.data.url}
            alt="featured-image"
            width={100}
            height={100}
            className="size-8 rounded-full items-center"
          />
        ),
      },
      {
        field: "name",
        headerName: "Name",
      },
      {
        field: "size",
        headerName: "Size",
      },
      {
        field: "type",
        headerName: "File Type",
      },
      {
        field: "createdAt",
        headerName: "Created",
      },
    ],
    [],
  );

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
          <TableSearch
            title="Search media..."
            search={search}
            setSearch={setSearch}
          />
        </div>
        <AgGridReact
          quickFilterText={search}
          domLayout="autoHeight"
          theme={myTheme}
          rowData={medias}
          columnDefs={columnDefs}
          getRowId={(row) => row.data.id}
          pagination={true}
          paginationPageSizeSelector={[10, 20, 50, 100]}
          paginationPageSize={10}
          autoSizeStrategy={{
            type: "fitGridWidth",
          }}
        />
      </div>
    </AgGridProvider>
  );
}
