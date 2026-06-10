'use server'

import { AddProjectCategorySchema } from "@/validaters/ProjectValidationSchemas";
import z from "zod";
import { isAdmin } from "./AuthActions";
import { db } from "@/lib/db";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
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
