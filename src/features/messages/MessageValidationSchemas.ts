import z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.email().min(1, 'Please provide your email'),
  phoneNumber: z.string().optional(),
  domain: z.string().optional(),
  message: z.string().min(1, 'How can I help?')
})
