'use server'

import { CompanySchema } from "@/validaters/CompanyValidationSchemas";
import z from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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
    revalidatePath('client')
    return { success: true, message: 'Company added' }
  } catch (error) {
    console.error(`Company Error: ${error}`)
    return { success: false, message: 'Failed to add company' }
  }
}

export async function EditCompanyInformationAction(values: z.infer<typeof CompanySchema>, companyId: string) {

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
    return { success: true, message: 'Company updated' }
  } catch (error) {
    console.error(`Company Error: ${error}`)
    return { success: false, message: 'Failed to update company' }
  }
}

export async function fetchAllCompanies() {
  try {
    const data = await db.company.findMany()

    return { success: true, data }
  } catch (error) {
    console.error(`Failed to fetch company list: ${error}`)
    return { success: false, message: 'Failed to fetch company list' }
  }
}
