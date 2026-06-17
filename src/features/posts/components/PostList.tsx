"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AllPostsTable from "@/features/posts/tables/AllPostsTable";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FetchAllPosts } from "../PostActions";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import { Post } from "@prisma/client";
import PageContainer from "@/components/shared/PageContainer";
export default function PostList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await FetchAllPosts();

      if (response.success && response.data) {
        setPosts(response.data);
      } else {
        setError("Failed to fetch posts");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorCard message="Failed to fetch posts" />;
  return (
    <PageContainer size="dashboard">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Posts</CardTitle>
            <CardDescription>All Posts</CardDescription>
          </div>
          <Button asChild>
            <Link href={"/dashboard/posts/new"}>
              <PlusIcon />
              <span>Post</span>
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <AllPostsTable posts={posts} />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
