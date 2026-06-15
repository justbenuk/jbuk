"use server";
import { db } from "@/lib/db";
import { AddProjectCategorySchema } from "../projects/ProjectValidationSchema";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import z from "zod";
import { isAdmin } from "../Authentication/AuthenticationActions";

export async function AddprojectCategoryAction(
  values: z.infer<typeof AddProjectCategorySchema>,
) {
  await isAdmin();

  try {
    const validated = AddProjectCategorySchema.parse(values);

    await db.projectCategory.create({
      data: {
        name: validated.name,
        slug: slugify(validated.name, {
          lower: true,
        }),
        description: validated.description,
      },
    });
    revalidatePath("/dashboard/categories");
    return { success: true, message: "Category added" };
  } catch (error) {
    console.error(`Project category Error: ${error}`);
    return { success: false, message: "Failed to add category" };
  }
}
export async function fetchAllProjectCategories() {
  try {
    const data = await db.projectCategory.findMany({
      include: {
        projects: true,
      },
    });

    return { success: true, data };
  } catch (error) {
    console.error(`Fetch categories Error: ${error}`);
    return { success: false, message: "Failed to fetch categories" };
  }
}

export async function fetchProjectCategoryById(id: string) {
  try {
    const data = await db.projectCategory.findUnique({
      where: {
        id,
      },
      include: {
        projects: true,
      },
    });
    return { success: true, data };
  } catch (error) {
    console.error(`Failed to fetch category: ${error}`);
    return { success: false, message: "Failed to fetch category" };
  }
}

export async function EditProjectCategoryById(
  id: string,
  values: z.infer<typeof AddProjectCategorySchema>,
) {
  await isAdmin();
  try {
    const validated = AddProjectCategorySchema.parse(values);

    await db.projectCategory.update({
      where: {
        id,
      },
      data: {
        slug: slugify(validated.name, {
          lower: true,
        }),
        name: validated.name,
        description: validated.description,
      },
    });

    return { success: true, message: "Updated category" };
  } catch (error) {
    console.error(`Failed to update category: ${error}`);
    return { success: false, message: "Failed to updat category" };
  }
}

export async function deleteCategoryById(id: string) {
  await isAdmin();
  try {
    await db.projectCategory.delete({
      where: { id },
    });
    revalidatePath("/dashboard/projects/categories");
    return { success: true, message: "Category deleted" };
  } catch (error) {
    console.error(`Failed to delete category: ${error}`);
    return { success: false, message: "Failed to dlete category" };
  }
}
