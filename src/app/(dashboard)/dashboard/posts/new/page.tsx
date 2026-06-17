import type { Metadata } from "next";
import PageContainer from "@/components/shared/PageContainer";
import AddPostForm from "@/features/posts/forms/AddPostForm";

export const metadata: Metadata = {
  title: "New Post",
};

export default async function AddPostPage() {
  return (
    <PageContainer size="dashboard">
      <AddPostForm />
    </PageContainer>
  );
}
