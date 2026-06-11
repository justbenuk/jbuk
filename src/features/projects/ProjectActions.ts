'use server'

import z from "zod";
import { db } from "@/lib/db";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isAdmin } from "@/actions/AuthActions";
import { AddProjectCategorySchema, AddProjectSchema } from "./ProjectValidationSchema";
export async function AddprojectCategoryAction(values: z.infer<typeof AddProjectCategorySchema>) {
  await isAdmin()

  try {
    const validated = AddProjectCategorySchema.parse(values)

    await db.projectCategory.create({
      data: {
        name: validated.name,
        slug: slugify(validated.name, {
          lower: true
        }),
        description: validated.description
      }
    })
    revalidatePath('/dashboard/projects/categories')
    return { success: true, message: 'Category added' }
  } catch (error) {
    console.error(`Project category Error: ${error}`)
    return { success: false, message: 'Failed to add category' }
  }
}

export async function fetchAllCategories() {
  try {
    const data = await db.projectCategory.findMany({
      include: {
        projects: true
      }
    })

    return { success: true, data }
  } catch (error) {
    console.error(`Fetch categories Error: ${error}`)
    return { success: false, message: 'Failed to fetch categories' }

  }
}

export async function fetchCategoryById(id: string) {
  try {
    const data = await db.projectCategory.findUnique({
      where: {
        id
      },
      include: {
        projects: true
      }
    })

    return { success: true, data }
  } catch (error) {
    console.error(`Failed to fetch category: ${error}`)
    return { success: false, message: 'Failed to fetch category' }
  }
}

export async function EditCategoryById(id: string, values: z.infer<typeof AddProjectCategorySchema>) {
  await isAdmin()
  try {
    const validated = AddProjectCategorySchema.parse(values)

    await db.projectCategory.update({
      where: {
        id
      },
      data: {
        slug: slugify(validated.name, {
          lower: true
        }),
        name: validated.name,
        description: validated.description
      }
    })

    return { success: true, message: 'Updated category' }
  } catch (error) {
    console.error(`Failed to update category: ${error}`)
    return { success: false, message: 'Failed to updat category' }
  }
}

export async function deleteCategoryById(id: string) {
  await isAdmin()
  try {
    await db.projectCategory.delete({
      where: { id }
    })
    revalidatePath('/dashboard/projects/categories')
    return { success: true, message: 'Category deleted' }
  } catch (error) {
    console.error(`Failed to delete category: ${error}`)
    return { success: false, message: 'Failed to dlete category' }

  }
}

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
    include: { company: true }
  })


  if (!user) redirect('/unauthorised')
  if (!user.company) return { success: false, message: 'No company added' }

  try {
    const data = await db.project.findMany({
      where: { companyId: user?.company.id },
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


