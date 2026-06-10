'use server'
import { isAdmin } from "@/actions/AuthActions";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import z from "zod";
import { ContactFormSchema } from "./MessageValidationSchemas";

export async function createMessage(values: z.infer<typeof ContactFormSchema>) {
  try {
    const validated = ContactFormSchema.parse(values)

    await db.contact.create({
      data: validated
    })
    revalidatePath('/dashboard/messages')
    return { success: true, message: 'Message sent' }
  } catch (error) {
    console.log(`Main Contact Form: ${error}`)
    return { success: false, message: 'Failed to send message' }
  }
}

export async function fetchAllMessages() {
  await isAdmin()
  try {
    const data = await db.contact.findMany()
    return { success: true, data }
  } catch (error) {
    console.error(`Message Fetch Error: ${error}`)
    return { success: false, message: 'Failed to fetch messages' }
  }
}

export async function deleteMessageById(id: string) {
  await isAdmin()
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
