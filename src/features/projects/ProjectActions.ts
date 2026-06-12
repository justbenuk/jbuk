'use server'

import z from "zod";
import { db } from "@/lib/db";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isAdmin } from "@/actions/AuthActions";
import { AddProjectSchema } from "./ProjectValidationSchema";




export async function AddProject(values: z.infer<typeof AddProjectSchema>) {
  await isAdmin()

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/unathorised')
  try {
    const validated = AddProjectSchema.parse(values)

    await db.project.create({
      data: {
        title: validated.title,
        slug: slugify(validated.title, {
          lower: true
        }),
        excerpt: validated.excerpt,
        content: validated.content,
        image: validated.image,
        userId: session?.user.id,
        projectCategoryId: validated.categoryId,
        companyId: validated.companyId,
        featured: validated.featured,
        published: validated.published
      }
    })

    revalidatePath('/projects')
    revalidatePath('/dashboard/projects')
    revalidatePath('/client/projects')
    return { success: true, message: 'Project created' }
  } catch (error) {
    console.error(`Failed to create project: ${error}`)
    return { success: false, message: 'Failed to create project' }
  }
}

export async function deleteProjectById(projectId: string) {
  await isAdmin()
  try {
    await db.project.delete({
      where: { id: projectId }
    })
    revalidatePath('dashboard/projects')
    return { success: true, message: 'Project Deleted' }
  } catch (error) {
    console.error(`Failed to delete project: ${error}`)
    return { success: false, message: 'Failed to delete project' }
  }
}

export async function fetchAllProjects() {
  try {
    const projects = await db.project.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        author: true,
        category: true,
        media: true
      }
    })
    return { success: true, projects }
  } catch (error) {
    console.error(`Failed to load projects: ${error}`)
    return { success: false, message: 'Failed to load projects' }
  }
}

export async function fetchProjectById(projectId: string) {
  try {
    const data = await db.project.findUnique({
      where: { id: projectId },
      include: { category: true, company: true, author: true, media: true }
    })

    if (!data) {
      throw new Error('Failed to fetch project')
    }
    return { success: true, data }
  } catch (error) {
    console.error(`Fetch project Error: ${error}`)
    return { success: false, message: 'Failed to fetch project' }
  }
}

export async function fetchAllProjectsByCompanyId() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/login')

  if (!session.user) redirect('/unauthorised')

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: { companies: true }
  })


  if (!user) redirect('/unauthorised')
  if (!user.companies.length) return { success: false, message: 'No company added' }

  try {
    const data = await db.project.findMany({
      where: { companyId: { in: user.companies.map((company) => company.id) } },
      include: { category: true, company: true, author: true, media: true }
    })

    if (!data) {
      throw new Error('Failed to fetch project')
    }
    console.log(data)
    return { success: true, data }
  } catch (error) {
    console.error(`Fetch project Error: ${error}`)
    return { success: false, message: 'Failed to fetch project' }
  }
}

