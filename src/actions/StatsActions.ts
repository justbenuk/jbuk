'use server'
import { db } from "@/lib/db";

export async function fetchDashboardStats() {

  try {
    const [messages, users] = await Promise.all([
      db.contact.count(),
      db.user.count()
    ])
    return { success: true, data: { messages, users } }
  } catch (error) {
    console.log(`Stats Error: ${error}`)
    return { success: false, }
  }

}
