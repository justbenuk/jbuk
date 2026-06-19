"use client";

import { Prisma } from "@prisma/client";
import { useEffect, useState } from "react";
import { FetchAllPublishedProjects } from "../ProjectActions";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import FeaturedCarouselSkeleton from "@/components/skeletons/FeaturedCarouselSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";

type ProjectsWithCategories = Prisma.ProjectGetPayload<{
  include: {
    category: true;
  };
}>;

export default function PublishedPostList({
  currentPage,
}: {
  currentPage: number;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  const [totalPages, setTotalPages] = useState(1);
  const [projects, setProjects] = useState<ProjectsWithCategories[]>([]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await FetchAllPublishedProjects({
        page: currentPage,
        pageSize: 6,
      });

      if (response.success && response.data) {
        setProjects(response.data);
        setTotalPages(response.totalPages);
      } else {
        setError("Failed to fetch data");
      }
      setLoading(false);
    }
    loadData();
  }, [currentPage]);

  if (loading) return <FeaturedCarouselSkeleton />;
  if (error) return <ErrorCard message={error} />;

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
