import TableSearch from "@/components/shared/TableSearch";
import { CompanyProps } from "../CompanyTypes";
import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
  themeQuartz,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PenIcon } from "lucide-react";
import DeleteCompanyForm from "../forms/DeleteCompanyForm";
import Image from "next/image";

export default function CompaniesTable({
  companies,
}: {
  companies: CompanyProps[];
}) {
  const [search, setSearch] = useState("");

  const modules = [AllCommunityModule];
  const columnDefs: ColDef<CompanyProps>[] = [
    {
      field: "image",
      headerName: "Company Image",
      cellRenderer: (row: ICellRendererParams) => (
        <Image
          src={row.data.image}
          alt="company image"
          width={50}
          height={50}
          className="rounded h-full"
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "emergencyContact",
      headerName: "Emergency Cantact",
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
    },
    {
      field: "domain",
      headerName: "Domain",
    },
    {
      headerName: "Actions",
      cellRenderer: (row: ICellRendererParams) => (
        <div className="flex flex-row items-center gap-2">
          <div>
            <Button
              asChild
              variant={"outline"}
              className="text-yellow-500"
              size={"icon-xs"}
            >
              <Link href={`/dashboard/companies/edit/${row.data.id}`}>
                <PenIcon />
              </Link>
            </Button>
          </div>
          <DeleteCompanyForm id={row.data.id} />
        </div>
      ),
    },
  ];

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
            title="Search users..."
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div>
          <AgGridReact
            domLayout="autoHeight"
            theme={myTheme}
            rowData={companies}
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
      </div>
    </AgGridProvider>
  );
}
