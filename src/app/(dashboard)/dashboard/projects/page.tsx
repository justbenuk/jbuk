import ProjectTables from "@/components/profile/project-tables";
import Pagination from "@/components/pagination";
import { AllProjectsAction } from "@/actions/project-actions";
import PageContainer from "@/components/page-sections/page-container";
import Link from "next/link";
export default async function AllProjects({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    limit?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 20;
  const offset = (currentPage - 1) * limit;
  const { totalPages, data } = await AllProjectsAction({
    offset,
    limit,
  });

  return (
    <PageContainer>
      <div className="flex flex-row items-center justify-between MT-4">
        <h1 className="text-lg">All Projects</h1>
        <Link
          href="/dashboard/projects/new"
          className="bg-green-500 text-white px-6 py-2 rounded-lg"
        >
          Add New Project
        </Link>
      </div>
      <div>
        <ProjectTables userProjects={data} />
      </div>
      <Pagination totalPages={totalPages} />
    </PageContainer>
  );
}
