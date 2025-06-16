import { z } from "zod";

export const insertContactFormSchema = z.object({
  name: z.string().min(1, 'Please supply your name'),
  email: z.string().email('Please supply a valid email'),
  phoneNumber: z.string().optional(),
  domain: z.string().optional(),
  message: z.string().min(1, 'You must leave a message')
})

export const insertLoginSchema = z.object({
  email: z.string().min(1, 'Enter your email address'),
  password: z.string().min(1, 'Enter your password')
})
