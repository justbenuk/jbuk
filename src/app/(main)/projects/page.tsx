import PageContainer from "@/components/shared/PageContainer";
import FeaturedProjectList from "@/features/projects/components/FeaturedPostList";
import PublishedPostList from "@/features/projects/components/PublishedPostList";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Current Projects",
};

type ProjectsPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(Number(page ?? 1) || 1, 1);

  return (
    <PageContainer size="dashboard" className="py-10 sm:py-14 lg:py-16">
      <FeaturedProjectList />
      <PublishedPostList currentPage={currentPage} />
    </PageContainer>
  );
}
