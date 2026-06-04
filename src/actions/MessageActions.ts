'use server'

import { db } from "@/lib/db";
import { MainContactFormSchema } from "@/validaters/ContactFormSchemas";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function createMessageAction(values: z.infer<typeof MainContactFormSchema>) {
  try {
    const validated = MainContactFormSchema.parse(values)

    await db.contact.create({
      data: validated
    })

    return { success: true, message: 'Message sent' }
  } catch (error) {
    console.log(`Main Contact Form: ${error}`)
    return { success: false, message: 'Failed to send message' }
  }
}

export async function fetchAllMessages() {
  return await db.contact.findMany()
}

export async function deleteMessageById(id: string) {

  try {
    await db.contact.delete({
      where: {
        id
      }
    })
    revalidatePath('/dashboard/messages')
    return { success: true, message: 'Messaged deleted' }
  } catch (error) {
    console.error(`Main Contact Form: ${error}`)
    return { success: false, message: 'Failed to delete message' }
  }

}
