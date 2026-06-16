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
import Image from "next/image";

export default function FrontPostList() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={post.image}
                alt={post.slug}
                width={300}
                height={300}
                className="rounded-2xl w-full h-75"
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
