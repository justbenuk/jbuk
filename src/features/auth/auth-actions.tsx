'use server'
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from 'next/headers'
import z from "zod";
import { loginUserSchema, registerUserSchema } from "./auth-validators";

export async function isLoggedinAction() {
  //check if the user has a session
  const session = await auth.api.getSession({
    headers: await headers()
  })

  //if user has a session redirect to dashboard
  if (!session) {
    redirect('/login')
  }
}

export async function isAdminAction() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!session) {
    redirect('/login')
  }

  if (session.user.role !== 'admin') {
    redirect('/not-authorised')
  }

}

export async function registerUserAction(data: z.infer<typeof registerUserSchema>) {
  try {
    //validate the user form 
    const validated = registerUserSchema.parse(data)
    await auth.api.signUpEmail({
      body: {
        name: validated.name,
        email: validated.email,
        password: validated.password,
        image: '/assets/profile.jpg',
      }
    })
    redirect('/login')
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export async function loginUserAction(data: z.infer<typeof loginUserSchema>) {
  try {
    const validated = loginUserSchema.parse(data)
    await auth.api.signInEmail({
      body: {
        email: validated.email,
        password: validated.password
      }
    })
    redirect('/dashboard')
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export async function userSignoutaction() {
  await auth.api.signOut({
    headers: await headers()
  })
}
