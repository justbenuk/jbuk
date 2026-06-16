"use client";

import ClientContainer from "@/components/shared/ClientContainer";
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
import { PostProps } from "../PostTypes";
import { FetchAllPosts } from "../PostActions";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
export default function PostList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostProps[]>([]);
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
    <ClientContainer>
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
    </ClientContainer>
  );
}
