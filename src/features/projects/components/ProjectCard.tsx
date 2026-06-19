import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type ProjectWithCategory = Prisma.ProjectGetPayload<{
  include: {
    category: true;
  };
}>;

export default function ProjectCard({
  project,
}: {
  project: ProjectWithCategory;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full gap-0 overflow-hidden rounded-3xl p-0 shadow-[0_16px_48px_color-mix(in_oklch,var(--foreground),transparent_92%)] ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_color-mix(in_oklch,var(--foreground),transparent_90%)]">
        <CardContent className="p-0">
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground shadow-sm ring-1 ring-border backdrop-blur-sm">
              {project.category.name}
            </span>
          </div>
          <CardHeader className="gap-3 p-5">
            <CardTitle className="line-clamp-2 text-xl font-semibold leading-snug">
              {project.title}
            </CardTitle>
            <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
              {project.excerpt}
            </p>
          </CardHeader>
        </CardContent>
      </Card>
    </Link>
  );
}
