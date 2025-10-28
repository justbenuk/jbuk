'use server'

import { isAdminAction } from "@/features/auth/auth-actions"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { headers } from "next/headers"

export async function fetchAllUsers() {
  await isAdminAction()
  const data = await db.user.findMany()
  return data
}

export async function banUserAction(id: string) {
  const user = await db.user.findFirst({
    where: { id }
  })

  if (!user) {
    return null
  }

  if (user.role === 'admin') {
    return { success: false, message: 'Not Allowed' }
  }

  await auth.api.banUser({
    body: {
      userId: user.id as string,
      banReason: "Banned",
    },
    headers: await headers()
  })
  revalidatePath('/dashboard/users')
}

export async function unbanUserAction(id: string) {
  await isAdminAction()
  const user = await db.user.findFirst({
    where: { id }
  })

  if (!user) {
    return null
  }

  await auth.api.unbanUser({
    body: {
      userId: user.id as string,
    },
    headers: await headers()
  })
  revalidatePath('/dashboard/users')
}

export async function fetchAllbannedUsersAction() {
  await isAdminAction()

  const users = await db.user.findMany({
    where: {
      banned: true
    }
  })
  return users
}

export async function deleteUserAction(id: string) {
  await isAdminAction()

  const user = await db.user.findFirst({
    where: { id }
  })

  if (!user) {
    return null
  }

  if (user.role === 'admin') {
    throw new Error('Not Authorised')
  }

  await db.user.delete({
    where: { id: user.id }
  })
  revalidatePath('/dashoboard/users')
}
