"use server";

import { db } from "@/lib/db";
import { isAdmin } from "../Authentication/AuthenticationActions";

export async function FetchAllMedia() {
  await isAdmin();

  try {
    const data = await db.media.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, data };
  } catch (error) {
    console.error(`Fetch Media: ${error}`);
    return { success: false, message: "Failed to fetch media" };
  }
}
