import z from "zod";

export const createMessageSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.string().min(1, 'Please provide your email'),
  subject: z.string().min(1, 'Whats your meesage about'),
  message: z.string().min(1, 'Whats your message')
})

export const createNextStepsSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.string().min(1, 'Please provide your email'),
  type: z.string().min(1, 'Whats your project'),
  budget: z.string().min(1, 'Whats your budget'),
  details: z.string().min(1, 'Aditional details required')
})
