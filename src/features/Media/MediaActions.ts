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
    throw new Error(`Fetch media: ${error}`);
  }
}
