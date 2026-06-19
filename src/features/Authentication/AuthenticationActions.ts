"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function isAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  if (session.user.role !== "admin") redirect("/unauthorised");

  return true;
}

export async function fetchAllUsers() {
  await isAdmin();

  try {
    const users = await db.user.findMany({
      include: {
        medias: true,
        companies: true,
      },
    });

    const data = users.map((user) => ({
      ...user,
      image:
        user.medias.find((media) => media.id === user.image)?.url ?? user.image,
    }));

    return { success: true, data };
  } catch (error) {
    console.error(`Users Error: ${error}`);

    return { success: false, message: "Failed to fetch users" };
  }
}

export async function deleteUserById(userId: string) {
  await isAdmin();
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) return notFound();

    if (user.role === "admin") {
      throw new Error("Action not allowed");
    }
    await db.user.delete({
      where: { id: userId },
    });
    revalidatePath("/dashboard/users");
    return { success: true, message: "User Deleted" };
  } catch (error) {
    console.error(`Delete User Error: ${error}`);
    return { success: false, message: "Failed to delete user" };
  }
}
