"use server";

import z from "zod";
import { db } from "@/lib/db";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AddProjectSchema } from "./ProjectValidationSchema";
import { utapi } from "@/app/api/uploadthing/core";
import { isAdmin } from "../Authentication/AuthenticationActions";

export async function AddProject(values: z.infer<typeof AddProjectSchema>) {
  await isAdmin();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/unathorised");
  try {
    const validated = AddProjectSchema.parse(values);
    const companyId = validated.companyId || null;

    if (companyId) {
      const company = await db.company.findUnique({
        where: { id: companyId },
        select: { id: true },
      });

      if (!company) {
        return { success: false, message: "Selected company does not exist" };
      }
    }

    const project = await db.project.create({
      data: {
        title: validated.title,
        slug: slugify(validated.title, {
          lower: true,
        }),
        excerpt: validated.excerpt,
        content: validated.content,
        image: validated.image,
        userId: session?.user.id,
        projectCategoryId: validated.categoryId,
        companyId,
        featured: validated.featured,
        published: validated.published,
      },
    });

    await db.media.updateMany({
      where: {
        url: validated.image,
        uploadedById: session.user.id,
        projectId: null,
      },
      data: {
        projectId: project.id,
      },
    });

    revalidatePath("/projects");
    revalidatePath("/dashboard/projects");
    revalidatePath("/client/projects");
    return { success: true, message: "Project created" };
  } catch (error) {
    console.error(`Failed to create project: ${error}`);
    return { success: false, message: "Failed to create project" };
  }
}

export async function deleteProjectById(projectId: string) {
  await isAdmin();
  try {
    await db.project.delete({
      where: { id: projectId },
    });
    revalidatePath("dashboard/projects");
    return { success: true, message: "Project Deleted" };
  } catch (error) {
    console.error(`Failed to delete project: ${error}`);
    return { success: false, message: "Failed to delete project" };
  }
}

export async function fetchAllProjects() {
  try {
    const projects = await db.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        category: true,
        media: true,
      },
    });
    return { success: true, projects };
  } catch (error) {
    console.error(`Failed to load projects: ${error}`);
    return { success: false, message: "Failed to load projects" };
  }
}

export async function fetchProjectById(projectId: string) {
  try {
    const data = await db.project.findUnique({
      where: { id: projectId },
      include: { category: true, company: true, author: true, media: true },
    });

    if (!data) {
      throw new Error("Failed to fetch project");
    }
    return { success: true, data };
  } catch (error) {
    console.error(`Fetch project Error: ${error}`);
    return { success: false, message: "Failed to fetch project" };
  }
}

export async function fetchAllProjectsByCompanyId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  if (!session.user) redirect("/unauthorised");

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: { companies: true },
  });

  if (!user) redirect("/unauthorised");
  if (!user.companies.length)
    return { success: false, message: "No company added" };

  try {
    const data = await db.project.findMany({
      where: { companyId: { in: user.companies.map((company) => company.id) } },
      include: { category: true, company: true, author: true, media: true },
    });

    if (!data) {
      throw new Error("Failed to fetch project");
    }
    return { success: true, data };
  } catch (error) {
    console.error(`Fetch project Error: ${error}`);
    return { success: false, message: "Failed to fetch project" };
  }
}

export async function EditProject(
  values: z.infer<typeof AddProjectSchema>,
  id: string,
) {
  await isAdmin();

  try {
    const validated = AddProjectSchema.parse(values);
    const companyId = validated.companyId || null;

    if (companyId) {
      const company = await db.company.findUnique({
        where: { id: companyId },
        select: { id: true },
      });

      if (!company) {
        return { success: false, message: "Selected company does not exist" };
      }
    }

    const existingProject = await db.project.findUnique({
      where: { id },
      select: {
        image: true,
      },
    });

    if (!existingProject) {
      return { success: false, message: "Project not found" };
    }

    const imageChanged = existingProject.image !== validated.image;

    await db.project.update({
      where: { id },
      data: {
        title: validated.title,
        slug: slugify(validated.title, {
          lower: true,
        }),
        excerpt: validated.excerpt,
        content: validated.content,
        image: validated.image,
        projectCategoryId: validated.categoryId,
        companyId,
        featured: validated.featured,
        published: validated.published,
      },
    });

    if (imageChanged) {
      await db.media.updateMany({
        where: {
          url: validated.image,
          projectId: null,
        },
        data: {
          projectId: id,
        },
      });
    }

    const oldImage = imageChanged
      ? await db.media.findFirst({
          where: {
            url: existingProject.image,
          },
        })
      : null;

    if (oldImage) {
      await utapi.deleteFiles(oldImage.key);

      await db.media.delete({
        where: { id: oldImage.id },
      });
    }

    revalidatePath("/projects");
    revalidatePath("/dashboard/projects");
    revalidatePath("/client/projects");
    return { success: true, message: "Project updated" };
  } catch (error) {
    console.error(`Edit Project: ${error}`);
    return { success: false, message: "Failed to update project" };
  }
}

export async function FetchFeaturedProjects() {
  try {
    const data = await db.project.findMany({
      where: {
        published: true,
        featured: true,
      },
      take: 6,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
      },
    });
    return { success: true, data };
  } catch (error) {
    throw new Error(`Fetch featured Error: ${error}`);
  }
}

export async function FetchAllPublishedProjects({
  pageSize,
  page,
}: {
  pageSize: number;
  page: number;
}) {
  try {
    const offset = (page - 1) * pageSize;

    const [data, totel] = await Promise.all([
      db.project.findMany({
        where: {
          published: true,
        },
        include: {
          category: true,
        },
        skip: offset,
        take: pageSize,
        orderBy: {
          createdAt: "desc",
        },
      }),
      db.project.count({
        where: {
          published: true,
        },
      }),
    ]);
    return { success: true, data, totalPages: Math.ceil(totel / pageSize) };
  } catch (error) {
    throw new Error(`Fetch Project: ${error}`);
  }
}
