import z from "zod";

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(8, 'Please enter your current password'),
  newPassword: z.string().min(8, 'Password needs to have 8 characters'),
  confirmNewPassword: z.string().min(8, 'Password needs to have 8 characters')
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  path: ['newPassword'],
  message: 'Passwords do not match'
})

export const CompanySchema = z.object({
  name: z.string().min(1, 'Please provide your company name'),
  email: z.string().min(1, 'Please provide the company email'),
  contactNumber: z.string().min(1, 'Please provide the main contact number'),
  emergencyContact: z.string().min(1, 'Please provide an emergency contact number'),
  address: z.string().optional(),
  domain: z.string().optional(),
  long: z.string().optional(),
  lat: z.string().optional()
})
