"use client";

import ErrorCard from "@/components/shared/ErrorCard";
import FeaturedCarouselSkeleton from "@/components/skeletons/FeaturedCarouselSkeleton";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FetchFeaturedProjects } from "../ProjectActions";

type ProjectsWithCategories = Prisma.ProjectGetPayload<{
  include: {
    category: true;
  };
}>;

export default function FeaturedProjectList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  const [projects, setProjects] = useState<ProjectsWithCategories[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: true }),
  ]);

  const THUMBNAIL_COUNT = projects.length;

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await FetchFeaturedProjects();

      if (response.success && response.data) {
        setProjects(response.data);
      } else {
        setError("Failed to fetch data");
      }

      setLoading(false);
    }

    loadData();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (loading) return <FeaturedCarouselSkeleton />;
  if (error) return <ErrorCard message={error} />;

  if (projects.length === 0) {
    return (
      <section className="grid min-h-80 place-items-center rounded-[2rem] bg-card p-8 text-center shadow-[0_18px_70px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border">
        <div className="grid gap-3">
          <h2 className="text-2xl font-semibold">No featured projects yet</h2>
          <p className="max-w-xl text-muted-foreground">
            Mark projects as published and featured in the dashboard and they
            will appear here.
          </p>
        </div>
      </section>
    );
  }

  const thumbnailSlots = Array.from({ length: THUMBNAIL_COUNT }, (_, index) =>
    projects.at(index),
  );

  return (
    <section className="relative isolate my-12 grid gap-5 sm:my-16">
      <div className="absolute left-1/2 top-1/2 -z-10 hidden h-[80%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-primary/10 shadow-[0_0_90px_color-mix(in_oklch,var(--primary),transparent_80%)] ring-1 ring-primary/15 dark:block" />

      <div className="relative overflow-hidden rounded-[2rem] bg-card p-2 shadow-[0_18px_48px_color-mix(in_oklch,var(--foreground),transparent_88%)] ring-1 ring-border sm:p-3 dark:shadow-[0_22px_70px_color-mix(in_oklch,var(--foreground),transparent_91%),0_0_42px_color-mix(in_oklch,var(--primary),transparent_88%)]">
        <div ref={emblaRef} className="overflow-hidden rounded-[1.45rem]">
          <div className="flex">
            {projects.map((project, index) => (
              <div key={project.id} className="min-w-0 flex-[0_0_100%]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block aspect-16/7 min-h-60 w-full overflow-hidden sm:min-h-80 lg:min-h-90"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/90 via-background/54 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                    <div className="grid max-w-3xl gap-2">
                      <p className="w-fit rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground ring-1 ring-border backdrop-blur-sm">
                        {project.category?.name ?? "Featured project"}
                      </p>
                      <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {projects.length > 1 ? (
          <div className="absolute right-6 top-6 flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="grid size-10 place-items-center rounded-full bg-background/75 text-foreground shadow-sm ring-1 ring-border backdrop-blur-sm transition hover:bg-background"
              aria-label="Previous featured project"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="grid size-10 place-items-center rounded-full bg-background/75 text-foreground shadow-sm ring-1 ring-border backdrop-blur-sm transition hover:bg-background"
              aria-label="Next featured project"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
        {thumbnailSlots.map((project, index) =>
          project ? (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                "group relative h-16 overflow-hidden rounded-xl bg-card shadow-[0_8px_22px_color-mix(in_oklch,var(--foreground),transparent_90%)] ring-1 ring-border transition sm:h-18 dark:shadow-[0_10px_28px_color-mix(in_oklch,var(--foreground),transparent_92%)]",
                selectedIndex === index &&
                  "ring-2 ring-primary shadow-[0_10px_30px_color-mix(in_oklch,var(--primary),transparent_74%)]",
              )}
              aria-label={`Show ${project.title}`}
            >
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 180px, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-background/0 transition group-hover:bg-background/10" />
            </button>
          ) : (
            <div
              key={`empty-thumbnail-${index}`}
              className="grid h-16 place-items-center rounded-xl bg-muted/55 text-muted-foreground ring-1 ring-dashed ring-border sm:h-18"
            >
              <ImageIcon className="size-5" />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
