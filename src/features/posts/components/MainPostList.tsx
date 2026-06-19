"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FetchAllPublishedPosts } from "../PostActions";
import ErrorCard from "@/components/shared/ErrorCard";
import { Prisma } from "@prisma/client";
import PostPagination from "./PostPagination";
import { format } from "date-fns";
import PageContainer from "@/components/shared/PageContainer";
import { Skeleton } from "@/components/ui/skeleton";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: {
    author: true;
  };
}>;

export default function MainPostList({ currentPage }: { currentPage: number }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await FetchAllPublishedPosts({
        page: currentPage,
        pageSize: 6,
      });

      if (response.success && response.data) {
        setPosts(response.data);
        setTotalPages(response.totalPages);
      } else {
        setError("Failed to fetch posts");
      }
      setLoading(false);
    }
    loadData();
  }, [currentPage]);

  if (loading)
    return (
      <PageContainer size="text" className="grid gap-6">
        <div className="grid gap-3">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-22" />
          <div className="flex flex-row items-center justify-between">
            <Skeleton className="w-43 h-6" />
            <Skeleton className="w-43 h-6" />
          </div>
        </div>
        <div className="grid gap-3">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-22" />
          <div className="flex flex-row items-center justify-between">
            <Skeleton className="w-43 h-6" />
            <Skeleton className="w-43 h-6" />
          </div>
        </div>
        <div className="grid gap-3">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-22" />
          <div className="flex flex-row items-center justify-between">
            <Skeleton className="w-43 h-6" />
            <Skeleton className="w-43 h-6" />
          </div>
        </div>
      </PageContainer>
    );
  if (error) return <ErrorCard message="Failed to fetch posts" />;

  return (
    <div className="grid gap-20">
      <div>
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.id}
            className="flex flex-col border-b-4 border-dashed py-4 w-full space-y-2"
          >
            <h1 className="text-2xl dark:text-primary">{post.title}</h1>
            <p>{post.excerpt}</p>
            <div className="flex flex-row items-center justify-between mt-4 text-xs font-semibold">
              <span>{format(post.createdAt, "d MMMM yyyy")}</span>
              <span>Posted By {post.author.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <PostPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
