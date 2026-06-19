import PageContainer from "@/components/shared/PageContainer";
import MainPostList from "@/features/posts/components/MainPostList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on practical websites, web applications, content, performance and working with a solo web developer.",
};

type PostPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function PostsPage({ searchParams }: PostPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(Number(page ?? 1) || 1, 1);
  return (
    <PageContainer size="text" className="py-12 sm:py-16 lg:py-20">
      <MainPostList currentPage={currentPage} />
    </PageContainer>
  );
}
