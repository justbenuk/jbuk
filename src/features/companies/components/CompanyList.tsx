"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CompaniesTable from "../tables/CompaniesTable";
import { useEffect, useState } from "react";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import { fetchAllCompanies } from "../CompanyActions";
import { Company } from "@prisma/client";

export default function CompanyList() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await fetchAllCompanies();

      if (response.success && response.data) {
        setCompanies(response.data);
      } else {
        setError("Failed to load companies");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorCard message="Failed to load companies" />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Companies</CardTitle>
        <CardDescription>Companies registered across all users</CardDescription>
      </CardHeader>
      <CardContent>
        <CompaniesTable companies={companies} />
      </CardContent>
    </Card>
  );
}
