import PageContainer from "@/components/shared/PageContainer";
import { MOCKPROJECTPOSTS } from "@/data/MockProjectPosts";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const OUTCOMES = [
  "A clearer route from visitor interest to enquiry",
  "A responsive interface that works cleanly on smaller screens",
  "A maintainable structure that can grow after launch",
];

export function generateStaticParams() {
  return MOCKPROJECTPOSTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = MOCKPROJECTPOSTS.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = MOCKPROJECTPOSTS.find((item) => item.slug === slug);

  if (!project) notFound();

  const relatedProjects = MOCKPROJECTPOSTS.filter(
    (item) => item.slug !== slug,
  ).slice(0, 3);

  return (
    <PageContainer size="dashboard" className="py-10 sm:py-14 lg:py-16">
      <article className="grid gap-12">
        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <header className="relative isolate grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[86%] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-card shadow-[0_0_120px_color-mix(in_oklch,var(--primary),transparent_79%),inset_0_0_44px_color-mix(in_oklch,var(--primary),transparent_90%)] ring-1 ring-border" />
          <div className="absolute right-[8%] top-[8%] -z-10 h-28 w-28 rounded-full bg-muted ring-1 ring-border" />
          <div className="absolute bottom-[7%] left-[8%] -z-10 h-28 w-44 rounded-[999px] bg-card ring-1 ring-border" />

          <div className="grid gap-6 px-2 lg:px-8">
            <p className="w-fit rounded-full border bg-background/70 px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs backdrop-blur-sm">
              {project.category}
            </p>
            <div className="grid gap-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                {project.excerpt}
              </p>
            </div>
            <ul className="grid gap-3">
              {OUTCOMES.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-md bg-background/60 px-4 py-3 shadow-[0_8px_28px_color-mix(in_oklch,var(--background),transparent_35%)] ring-1 ring-border/50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] bg-background/70 p-3 shadow-[0_28px_100px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border backdrop-blur-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <aside className="grid gap-5 lg:sticky lg:top-8">
            <div className="rounded-3xl bg-card p-6 shadow-[0_18px_60px_color-mix(in_oklch,var(--foreground),transparent_94%)] ring-1 ring-border">
              <h2 className="text-lg font-semibold">Project focus</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="mt-1 font-medium">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="mt-1 font-medium">{project.author.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Approach</dt>
                  <dd className="mt-1 font-medium">Design and development</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl bg-muted p-6 ring-1 ring-border">
              <h2 className="text-lg font-semibold">Have a similar idea?</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                I can help shape the scope and build something that fits the
                work.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 font-medium text-primary"
              >
                Talk about it
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>

          <div className="tiptap-content px-1 text-lg leading-8 text-foreground/90 sm:px-4 lg:px-0">
            <h2>Project overview</h2>
            {project.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <section className="grid gap-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">More projects</h2>
              <p className="mt-2 text-muted-foreground">
                A few more examples from the same practical stack.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium text-primary"
            >
              Start a project
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className="group rounded-3xl bg-card p-5 shadow-[0_14px_50px_color-mix(in_oklch,var(--foreground),transparent_95%)] ring-1 ring-border"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  {relatedProject.category}
                </p>
                <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug">
                  {relatedProject.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View project
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
