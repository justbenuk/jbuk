"use client";
import ErrorCard from "@/components/shared/ErrorCard";
import PageContainer from "@/components/shared/PageContainer";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import EditPostForm from "@/features/posts/forms/EditPostForm";
import { FetchPostById } from "@/features/posts/PostActions";
import { Prisma } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: {
    author: true;
  };
}>;

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<PostWithAuthor>();
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await FetchPostById(id);

      if (response.success && response.data) {
        setPost(response.data);
      } else {
        setError("Failed to fetch post");
      }
      setLoading(false);
    }
    loadData();
  }, [id]);
  if (loading) return <DashboardSkeleton />;
  if (error) return <ErrorCard message="Failed to load data" />;
  if (!post) return <ErrorCard message="Failed to load post" />;
  return (
    <PageContainer size="dashboard">
      <EditPostForm post={post} />
    </PageContainer>
  );
}
