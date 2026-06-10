'use server'

import { auth } from "@/lib/auth";
import { db } from "@/lib/db"
import { ChangePasswordSchema } from "@/validaters/UserValidationSchemas";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import z from "zod";

export async function fetchAllUsers() {
  try {
    const users = await db.user.findMany({
      include: {
        medias: true,
      }
    })

    const data = users.map((user) => ({
      ...user,
      image: user.medias.find((media) => media.id === user.image)?.url ?? user.image,
    }))

    return { success: true, data }
  } catch (error) {
    console.error(`Users Error: ${error}`)

    return { success: false, message: 'Failed to fetch users' }
  }
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
