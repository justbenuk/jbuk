import ProjectTables from "@/components/profile/project-tables";
import Pagination from "@/components/pagination";
import { AllProjectsAction } from "@/actions/project-actions";
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

  console.log(data);
  return (
    <>
      <h1>All Projects</h1>
      <div>
        <ProjectTables userProjects={data} />
      </div>
      <Pagination totalPages={totalPages} />
    </>
  );
}
