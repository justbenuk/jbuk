import PageContainer from "@/components/shared/PageContainer";
import { MOCKBLOGPOSTS } from "@/data/MockBlogPosts";
import { ArrowRight, BookOpenText } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on practical websites, web applications, content, performance and working with a solo web developer.",
};

const visiblePosts = MOCKBLOGPOSTS.slice(0, 6);
const [featuredPost, secondPost, ...posts] = visiblePosts;

export default function PostsPage() {
  return (
    <PageContainer size="dashboard" className="py-12 sm:py-16 lg:py-20">
      <section className="grid gap-14">
        <div className="relative isolate grid min-h-[540px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[78%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-card shadow-[0_0_120px_color-mix(in_oklch,var(--primary),transparent_78%),inset_0_0_44px_color-mix(in_oklch,var(--primary),transparent_88%)] ring-1 ring-border" />
          <div className="absolute left-[3%] top-[12%] -z-10 h-28 w-36 rounded-[999px] bg-muted shadow-[0_24px_70px_color-mix(in_oklch,var(--secondary),transparent_84%)] ring-1 ring-border" />
          <div className="absolute bottom-[8%] right-[5%] -z-10 h-28 w-28 rounded-full bg-card shadow-[0_24px_70px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border" />

          <div className="grid gap-6 px-2 lg:px-8">
            <p className="w-fit rounded-full border bg-background/70 px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs backdrop-blur-sm">
              Blog
            </p>
            <div className="grid gap-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Useful notes from building websites the practical way.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Short, direct articles about content, design decisions,
                performance and the kind of web work that helps a project stay
                clear after launch.
              </p>
            </div>
            <div className="grid max-w-xl gap-3 sm:grid-cols-3">
              {["Planning", "Content", "Performance"].map((item) => (
                <div
                  key={item}
                  className="rounded-md bg-background/60 px-4 py-3 text-sm font-medium shadow-[0_8px_28px_color-mix(in_oklch,var(--background),transparent_35%)] ring-1 ring-border/50 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {featuredPost ? (
            <Link
              href={`/posts/${featuredPost.slug}`}
              className="group relative mx-auto grid w-full max-w-xl overflow-hidden rounded-[2rem] bg-background/70 p-3 shadow-[0_28px_100px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid gap-3 p-4 sm:p-5">
                <p className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  Featured - {featuredPost.category}
                </p>
                <h2 className="text-2xl font-semibold leading-tight">
                  {featuredPost.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ) : null}
        </div>

        <div className="grid gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Selected writing</h2>
              <p className="mt-2 text-muted-foreground">
                Six recent notes, kept focused so the page does not become a
                content dump.
              </p>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Showing {visiblePosts.length} posts
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {secondPost ? (
              <Link
                href={`/posts/${secondPost.slug}`}
                className="group grid overflow-hidden rounded-[2rem] bg-card shadow-[0_18px_70px_color-mix(in_oklch,var(--foreground),transparent_94%)] ring-1 ring-border"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={secondPost.image}
                    alt={secondPost.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <article className="grid gap-3 p-6">
                  <p className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {secondPost.category}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight">
                    {secondPost.title}
                  </h3>
                  <p className="line-clamp-3 leading-7 text-muted-foreground">
                    {secondPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            ) : null}

            <div className="grid gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="group grid gap-4 rounded-3xl bg-card p-4 shadow-[0_14px_50px_color-mix(in_oklch,var(--foreground),transparent_95%)] ring-1 ring-border sm:grid-cols-[150px_1fr] sm:items-center"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-square">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 640px) 150px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <article className="grid gap-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <BookOpenText className="size-4 text-primary" />
                      {post.category}
                    </div>
                    <h3 className="line-clamp-2 text-xl font-semibold leading-snug">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
