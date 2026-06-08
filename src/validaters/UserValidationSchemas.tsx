import z from "zod";

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(8, 'Please enter your current password'),
  newPassword: z.string().min(8, 'Password needs to have 8 characters'),
  confirmNewPassword: z.string().min(8, 'Password needs to have 8 characters')
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  path: ['newPassword'],
  message: 'Passwords do not match'
})
