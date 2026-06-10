import z from "zod";

export const AddProjectCategorySchema = z.object({
  name: z.string().min(1, 'Category must have a name'),
  description: z.string().optional()
})
