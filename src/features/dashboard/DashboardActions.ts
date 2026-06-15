"use server";
import { db } from "@/lib/db";
import { isAdmin } from "../Authentication/AuthenticationActions";

export async function fetchDashboardStats() {
  await isAdmin();
  try {
    const [messages, users, projects, servers] = await Promise.all([
      db.contact.count(),
      db.user.count(),
      db.project.count(),
      db.server.count(),
    ]);
    return { success: true, data: { messages, users, projects, servers } };
  } catch (error) {
    console.log(`Error fetching stats: ${error}`);
    return { success: false };
  }
}
