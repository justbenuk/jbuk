'use server'

import { db } from "@/lib/db"

export async function fetchAllUsers() {
  return db.user.findMany();
}
