'use server'

import { auth } from "@/lib/auth";
import { db } from "@/lib/db"
import { ChangePasswordSchema } from "@/validaters/UserValidationSchemas";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import z from "zod";

export async function fetchAllUsers() {
  return db.user.findMany();
}

export async function changeUserPassword(values: z.infer<typeof ChangePasswordSchema>) {
  try {

    const validated = ChangePasswordSchema.parse(values)

    await auth.api.changePassword({
      body: {
        newPassword: validated.newPassword,
        currentPassword: validated.currentPassword,
        revokeOtherSessions: true
      },
      headers: await headers()
    })

    revalidatePath('/client')
    return { success: true, message: 'Password Changed' }
  } catch (error) {
    console.error(`Change Password Error: ${error}`)
    return { success: false, message: 'Failed to change password' }
  }
}

