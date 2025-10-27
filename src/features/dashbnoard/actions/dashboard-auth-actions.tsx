'use server'

import { isAdminAction } from "@/features/auth/auth-actions"
import { db } from "@/lib/db"

export async function fetchAllUsers() {
  await isAdminAction()
  const users = await db.user.findMany()
  return users
}
