import PageContainer from "@/components/shared/PageContainer";
import { MOCKBLOGPOSTS } from "@/data/MockBlogPosts";
import { ArrowLeft, ArrowRight, BookOpenText } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MOCKBLOGPOSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = MOCKBLOGPOSTS.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = MOCKBLOGPOSTS.find((item) => item.slug === slug);

  if (!post) notFound();

  const relatedPosts = MOCKBLOGPOSTS.filter((item) => item.slug !== slug).slice(
    0,
    3,
  );

  return (
    <PageContainer size="dashboard" className="py-10 sm:py-14 lg:py-16">
      <article className="grid gap-12">
        <Link
          href="/posts"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>

        <header className="relative isolate grid gap-8">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[82%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-card shadow-[0_0_120px_color-mix(in_oklch,var(--primary),transparent_79%),inset_0_0_44px_color-mix(in_oklch,var(--primary),transparent_90%)] ring-1 ring-border" />
          <div className="absolute left-[6%] top-[12%] -z-10 h-24 w-36 rounded-[999px] bg-muted ring-1 ring-border" />
          <div className="absolute bottom-[8%] right-[8%] -z-10 h-28 w-28 rounded-full bg-card ring-1 ring-border" />

          <div className="mx-auto grid max-w-4xl gap-5 px-2 text-center">
            <p className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border bg-background/70 px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs backdrop-blur-sm">
              <BookOpenText className="size-4 text-primary" />
              {post.category}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] bg-background/70 p-3 shadow-[0_28px_100px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border backdrop-blur-sm">
            <div className="relative aspect-[16/8] min-h-72 overflow-hidden rounded-[1.45rem]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <div className="tiptap-content px-1 text-lg leading-8 text-foreground/90 sm:px-4 lg:px-0">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="grid gap-5 lg:sticky lg:top-8">
            <div className="rounded-3xl bg-card p-6 shadow-[0_18px_60px_color-mix(in_oklch,var(--foreground),transparent_94%)] ring-1 ring-border">
              <p className="text-sm font-medium text-muted-foreground">
                Written by
              </p>
              <h2 className="mt-2 text-xl font-semibold">{post.author.name}</h2>
              <p className="mt-1 text-sm font-medium text-primary">
                {post.author.role}
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                {post.author.bio}
              </p>
            </div>
            <div className="rounded-3xl bg-muted p-6 ring-1 ring-border">
              <h2 className="text-lg font-semibold">Want this thinking on your site?</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                I can help turn a loose idea into a clear plan and a practical
                build.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 font-medium text-primary"
              >
                Start a conversation
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        </div>

        <section className="grid gap-5">
          <h2 className="text-2xl font-semibold">More from the blog</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/posts/${relatedPost.slug}`}
                className="group rounded-3xl bg-card p-5 shadow-[0_14px_50px_color-mix(in_oklch,var(--foreground),transparent_95%)] ring-1 ring-border"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  {relatedPost.category}
                </p>
                <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug">
                  {relatedPost.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </PageContainer>
  );
}
