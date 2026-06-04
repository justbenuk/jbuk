'use server'
import { db } from "@/lib/db";

export async function getDashboardStats() {
  const [messages] = await Promise.all([
    db.contact.count()
  ])

  return {
    messages
  }
}
