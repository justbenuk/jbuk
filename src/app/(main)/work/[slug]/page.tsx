"use client";
import { workItems } from "@/data/work-items";
import Image from "next/image";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import GithubLink from "@/components/ui/buttons-and-links/github-link";
import SiteLink from "@/components/ui/buttons-and-links/site-link";
export default function ProjectShow() {
  const path = useParams();

  const project = workItems.filter((workItems) => workItems.slug === path.slug);

  if (!project[0]) {
    return notFound;
  }

  return (
    <div className="container mx-auto px-6 2xl:px-0 min-h-[70dvh] flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
        <div>
          <Image
            src={`${project[0].image}`}
            alt="Project Image"
            height={700}
            width={700}
            className="rounded-xl w-full"
          />
        </div>
        <div className="p-6 flex flex-col items-center lg:items-start justify-center">
          <h1 className="uppercase text-2xl lg:text-4xl italic font-bold">
            {project[0].title}
          </h1>
          <p>{project[0].summery}</p>
          <div className="pt-12">
            <div className="flex flex-col md:flex-row gap-6 items-start justify-start">
              <GithubLink route="/">Github</GithubLink>
              <SiteLink route="/">Web Site</SiteLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
