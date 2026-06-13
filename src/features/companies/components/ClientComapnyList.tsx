"use client";

import { useEffect, useState } from "react";
import { CompanyProps } from "../CompanyTypes";
import { fetchCompaniesByUserId } from "../CompanyActions";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import CompaniesTable from "../tables/CompaniesTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

export default function ClientCompanyList() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await fetchCompaniesByUserId();
      if (response.success && response.data) {
        setCompanies(response.data);
      } else {
        setError("Failed to fetch companies");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorCard message="Failed to load company list" />;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Companies</CardTitle>
          <CardDescription>List of all your companies</CardDescription>
        </div>
        <div>
          <Button asChild>
            <Link href={"/client/company"}>
              <PlusIcon />
              <span>Company</span>
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CompaniesTable companies={companies} />
      </CardContent>
    </Card>
  );
}
