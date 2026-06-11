'use server'
import { auth } from "@/lib/auth"
import { ChangePasswordSchema, CompanySchema } from "./ClientValidationSchema"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import z from "zod"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"

export async function changeUserPassword(values: z.infer<typeof ChangePasswordSchema>) {
  try {

    const validated = ChangePasswordSchema.parse(values)

    await auth.api.changePassword({
      body: {
        newPassword: validated.newPassword,
        currentPassword: validated.currentPassword,
        revokeOtherSessions: true
      },
      headers: await headers()
    })

    revalidatePath('/client')
    return { success: true, message: 'Password Changed' }
  } catch (error) {
    console.error(`Change Password Error: ${error}`)
    return { success: false, message: 'Failed to change password' }
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
