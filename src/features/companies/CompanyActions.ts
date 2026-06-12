'use server'

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { CompanySchema } from "./CompanyValidationSchema"
import { revalidatePath } from "next/cache"
import z from "zod"
import { isAdmin } from "../Authentication/AuthenticationActions"

export async function FetchAllCompanyies() {
  await isAdmin()
  try {
    const data = await db.company.findMany()

    return { success: true, data }
  } catch (error) {
    throw new Error(`All Companies Error: ${error}`)
  }
}

export async function fetchCompanyById(id: string) {
  try {
    const data = await db.company.findFirst({
      where: { id }
    })

    if (!data) {
      throw new Error(`Fetch Company Error: Failed to fetch company`)
    }
    return { success: true, data }
  } catch (error) {
    throw new Error(`Fetch Company Error: ${error}`)
  }
}

export async function AddCompanyInformationAction(values: z.infer<typeof CompanySchema>) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/unathorised')

  try {
    const validated = CompanySchema.parse(values)

    await db.company.create({
      data: {
        name: validated.name,
        email: validated.email,
        contactNumber: validated.contactNumber,
        emergencyContact: validated.emergencyContact,
        address: validated.address,
        domain: validated.domain,
        long: validated.long,
        lat: validated.lat,
        userId: session.user.id
      }
    })
    revalidatePath('/client')
    return { success: true, message: 'Company added' }
  } catch (error) {
    console.error(`Company Error: ${error}`)
    return { success: false, message: 'Failed to add company' }
  }
}

export async function EditCompanyInformation(values: z.infer<typeof CompanySchema>, companyId: string) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/unathorised')

  try {
    const validated = CompanySchema.parse(values)

    await db.company.update({
      where: {
        id: companyId
      },
      data: {
        name: validated.name,
        email: validated.email,
        contactNumber: validated.contactNumber,
        emergencyContact: validated.emergencyContact,
        address: validated.address,
        domain: validated.domain,
        long: validated.long,
        lat: validated.lat,
        userId: session.user.id
      }
    })
    revalidatePath('client')
    return { success: true }
  } catch (error) {
    console.error(`Company Error: ${error}`)
    throw new Error(`Company Error: ${error}`)
  }
}
