'use server'
import { isAdmin } from "@/actions/AuthActions";
import { db } from "@/lib/db";

export async function fetchDashboardStats() {
  await isAdmin()
  try {
    const [messages, users, projects] = await Promise.all([
      db.contact.count(),
      db.user.count(),
      db.project.count()
    ])
    return { success: true, data: { messages, users, projects } }
  } catch (error) {
    console.log(`Error fetching stats: ${error}`)
    return { success: false, }
  }

}
