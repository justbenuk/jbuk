import TableSearch from "@/components/shared/TableSearch";
import {
  AllCommunityModule,
  ColDef,
  ValueGetterParams,
  themeQuartz,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import { ServerProps } from "../ServerTypes";

export default function AllServersTable({
  servers,
}: {
  servers: ServerProps[];
}) {
  const modules = [AllCommunityModule];
  const [search, setSearch] = useState("");
  const columnDefs = useMemo<ColDef<ServerProps>[]>(
    () => [
      {
        field: "provider",
        headerName: "Title",
      },
      {
        headerName: "Project",
        valueGetter: (params: ValueGetterParams<ServerProps>) =>
          params.data?.project?.title ?? "",
      },
      {
        headerName: "Company",
        valueGetter: (params: ValueGetterParams<ServerProps>) =>
          params.data?.company?.name ?? "",
      },
      {
        field: "providerUrl",
        headerName: "Slug",
      },
      {
        field: "ipAddress",
        headerName: "Featured",
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
            title="Search servers..."
            search={search}
            setSearch={setSearch}
          />
        </div>
        <AgGridReact
          quickFilterText={search}
          domLayout="autoHeight"
          theme={myTheme}
          rowData={servers}
          columnDefs={columnDefs}
          getRowId={(row) => row.data.id}
          paginationPageSize={20}
          autoSizeStrategy={{
            type: "fitGridWidth",
          }}
        />
      </div>
    </AgGridProvider>
  );
}
