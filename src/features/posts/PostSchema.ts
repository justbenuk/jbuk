import z from "zod";

export const PostSchema = z.object({
  title: z.string().min(1, "A post must have a title"),
  excerpt: z.string().min(1, "A excerpt helps keep the flow"),
  image: z.string().min(1, "Feature Image required"),
  content: z.string().min(1, "The important part"),
  featured: z.boolean(),
  published: z.boolean(),
});
