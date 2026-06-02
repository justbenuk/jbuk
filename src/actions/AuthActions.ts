'use server'

import { auth } from "@/lib/auth";
import { LoginUserSchema, RegisterUserSchema } from "@/validaters/AuthValidationSchemas";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

export async function RegisterUserAction(values: z.infer<typeof RegisterUserSchema>) {
  try {
    const validated = RegisterUserSchema.parse(values)

    await auth.api.signUpEmail({
      body: {
        name: validated.name,
        email: validated.email,
        password: validated.password,
        image: '/assets/profile.png',
      },
      headers: await headers()
    })

    return { success: true, message: 'User registered' }
  } catch (error) {
    console.error(`Register User: ${error}`)
    return { success: false, message: 'Failed to register user' }
  }
}

export async function LoginUserAction(values: z.infer<typeof LoginUserSchema>) {
  try {
    const validated = LoginUserSchema.parse(values)

    await auth.api.signInEmail({
      body: {
        email: validated.email,
        password: validated.password,
      },
      headers: await headers()
    })

    return { success: true, message: 'User logged in' }
  } catch (error) {
    console.error(`Login User: ${error}`)
    return { success: false, message: 'Failed to login user' }
  }
}

export async function isLoggedIn() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/auth')

  return true
}

export async function isAdmin() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/auth')

  if (session.user.role !== 'admin') redirect('/unauthorised')

  return true
}
