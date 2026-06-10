import z from "zod";

export const AddProjectCategorySchema = z.object({
  name: z.string().min(1, 'Category must have a name'),
  description: z.string().optional()
})


export const AddProjectSchema = z.object({
  title: z.string().min(1, 'Project must contain a title'),
  excerpt: z.string().min(1, 'Project must contain and excerpt'),
  image: z.string().min(1, 'Project must have a feature image'),
  content: z.string().min(1, 'Please provide some contant'),
  companyId: z.string().optional(),
  categoryId: z.string().min(1, 'What category'),
  published: z.boolean().default(false),
  featured: z.boolean().default(false)
})


