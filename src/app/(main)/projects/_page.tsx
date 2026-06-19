import PageContainer from "@/components/shared/PageContainer";
import { MOCKPROJECTPOSTS } from "@/data/MockProjectPosts";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of example web projects, websites, dashboards and custom tools built with a practical solo developer approach.",
};

const visibleProjects = MOCKPROJECTPOSTS.slice(0, 6);
const [featuredProject, ...projects] = visibleProjects;

const PROJECT_POINTS = [
  "Clear scope",
  "Responsive build",
  "Maintainable after launch",
];

export default function ProjectsPage() {
  return (
    <PageContainer size="dashboard" className="py-12 sm:py-16 lg:py-20">
      <section className="grid gap-14">
        <div className="relative isolate grid min-h-[560px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-card shadow-[0_0_120px_color-mix(in_oklch,var(--primary),transparent_78%),inset_0_0_44px_color-mix(in_oklch,var(--primary),transparent_88%)] ring-1 ring-border" />
          <div className="absolute right-[7%] top-[10%] -z-10 h-32 w-32 rounded-full bg-muted shadow-[0_24px_70px_color-mix(in_oklch,var(--secondary),transparent_84%)] ring-1 ring-border" />
          <div className="absolute bottom-[8%] left-[8%] -z-10 h-28 w-44 rounded-[999px] bg-card shadow-[0_24px_70px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border" />

          <div className="grid gap-6 px-2 lg:px-8">
            <p className="w-fit rounded-full border bg-background/70 px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs backdrop-blur-sm">
              Projects
            </p>
            <div className="grid gap-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Project examples with the thinking left visible.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                A cleaner look at the sort of websites, dashboards and custom
                tools I build: practical, responsive and shaped around the real
                job they need to do.
              </p>
            </div>
            <ul className="grid max-w-2xl gap-3 sm:grid-cols-3">
              {PROJECT_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 rounded-md bg-background/60 px-4 py-3 text-sm font-medium shadow-[0_8px_28px_color-mix(in_oklch,var(--background),transparent_35%)] ring-1 ring-border/50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {featuredProject ? (
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="group relative mx-auto grid w-full max-w-xl overflow-hidden rounded-[2rem] bg-background/70 p-3 shadow-[0_28px_100px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid gap-3 p-4 sm:p-5">
                <p className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  Featured - {featuredProject.category}
                </p>
                <h2 className="text-2xl font-semibold leading-tight">
                  {featuredProject.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View case study
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ) : null}
        </div>

        <div className="grid gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Selected projects</h2>
              <p className="mt-2 text-muted-foreground">
                Six examples is enough to show range without making the page
                feel crowded.
              </p>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Showing {visibleProjects.length} projects
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={
                  index === 0
                    ? "group grid overflow-hidden rounded-[2rem] bg-card shadow-[0_18px_70px_color-mix(in_oklch,var(--foreground),transparent_94%)] ring-1 ring-border md:col-span-2 lg:grid-cols-[0.9fr_1.1fr]"
                    : "group grid overflow-hidden rounded-3xl bg-card shadow-[0_14px_50px_color-mix(in_oklch,var(--foreground),transparent_95%)] ring-1 ring-border"
                }
              >
                <div
                  className={
                    index === 0
                      ? "relative min-h-72 overflow-hidden"
                      : "relative aspect-[16/10] overflow-hidden"
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 42vw, 100vw"
                        : "(min-width: 768px) 47vw, 100vw"
                    }
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <article
                  className={
                    index === 0
                      ? "grid content-center gap-4 p-6 lg:p-8"
                      : "grid gap-4 p-5"
                  }
                >
                  <p className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.category}
                  </p>
                  <h3
                    className={
                      index === 0
                        ? "text-3xl font-semibold leading-tight"
                        : "line-clamp-2 text-xl font-semibold leading-snug"
                    }
                  >
                    {project.title}
                  </h3>
                  <p
                    className={
                      index === 0
                        ? "line-clamp-4 leading-7 text-muted-foreground"
                        : "line-clamp-3 text-sm leading-6 text-muted-foreground"
                    }
                  >
                    {project.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View project
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
