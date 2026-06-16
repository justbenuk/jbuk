import type { Metadata } from "next";

import ClientContainer from "@/components/shared/ClientContainer";
import FrontPostList from "@/features/posts/components/FrontPostList";

export const metadata: Metadata = {
  title: "Blog Posts",
  description:
    "Some of the things I find interesting in the world of tech, security and web development",
};

export default async function PostsPage() {
  return (
    <ClientContainer>
      <FrontPostList />
    </ClientContainer>
  );
}
