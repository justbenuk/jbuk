"use server";
import { db } from "@/utils/db";

export async function fetchUser(id: string) {
  const user = await db.user.findUnique({
    where: {
      id,
    },
    include: {
      servers: true,
      projects: {
        select: {
          github_url: true,
          project_url: true,
        },
      },
      accounts: {
        select: {
          provider: true,
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  return user;
}
