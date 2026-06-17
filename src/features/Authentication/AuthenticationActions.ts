"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import z from "zod";
import {
  LoginUserSchema,
  RegisterUserSchema,
} from "./AuthenticationValidationSchema";
import { revalidatePath } from "next/cache";

export async function RegisterUserAction(
  values: z.infer<typeof RegisterUserSchema>,
) {
  try {
    const validated = RegisterUserSchema.parse(values);

    await auth.api.signUpEmail({
      body: {
        name: validated.name,
        email: validated.email,
        password: validated.password,
      },
      headers: await headers(),
    });

    return { success: true, message: "User registered" };
  } catch (error) {
    console.error(`Register User: ${error}`);
    return { success: false, message: "Failed to register user" };
  }
}

export async function LoginUserAction(values: z.infer<typeof LoginUserSchema>) {
  try {
    const validated = LoginUserSchema.parse(values);

    await auth.api.signInEmail({
      body: {
        email: validated.email,
        password: validated.password,
      },
      headers: await headers(),
    });

    return { success: true, message: "User logged in" };
  } catch (error) {
    console.error(`Login User: ${error}`);
    return { success: false, message: "Failed to login user" };
  }
}

export async function isLoggedIn() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/auth");

  return true;
}

export async function isAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/auth");

  if (session.user.role !== "admin") redirect("/unauthorised");

  return true;
}

export async function fetchCurrentUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const data = await db.user.findUnique({
      where: {
        id: session?.user.id,
      },
      include: {
        companies: true,
        medias: true,
      },
    });

    const image =
      data?.medias.find((media) => media.id === data.image)?.url ?? data?.image;

    return { success: true, data: data ? { ...data, image } : data };
  } catch (error) {
    console.error(`Fetch User: ${error}`);
    return { success: false, message: "Failed to fetch user" };
  }
}

export async function userSignOut() {
  await auth.api.signOut({
    headers: await headers(),
  });
  return redirect("/");
}

export async function fetchAllUsers() {
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
