import z from "zod";

export const RegisterUserSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.email().min(1, 'Please provide eyour email'),
  password: z.string().min(8, 'Must be 8 characters'),
  confirmPassword: z.string().min(8, 'Must be 8 characters')
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match'
})

export const LoginUserSchema = z.object({
  email: z.email().min(1, 'Please provide eyour email'),
  password: z.string().min(8, 'Must be 8 characters'),
})
