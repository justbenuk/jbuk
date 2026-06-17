import EditorContent from "@/components/Editor/EditorContent";
import { FetchPostBySlug } from "@/features/posts/PostActions";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import ClientContainer from "@/components/shared/ClientContainer";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const { data } = await FetchPostBySlug(slug);

  return {
    title: data?.title,
  };
}

export default async function SinglePostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const { data } = await FetchPostBySlug(slug);

  if (!data) return notFound();

  return (
    <ClientContainer className="grid gap-6">
      <h1 className="text-primary text-5xl font-semibold">{data.title}</h1>
      <div>
        <Image
          src={data.image}
          alt={data.title}
          width={900}
          height={300}
          className="h-150 w-full rounded-2xl"
        />
      </div>
      <p>{data.excerpt}</p>
      <EditorContent content={data.content} />
    </ClientContainer>
  );
}
