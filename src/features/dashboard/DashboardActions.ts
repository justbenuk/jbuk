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

export async function fetchAllUsers() {
  try {
    const users = await db.user.findMany({
      include: {
        medias: true,
        company: true,
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
