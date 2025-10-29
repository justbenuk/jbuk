'use server'

import z from "zod";
import { createMessageSchema } from "./contact-validators";
import { db } from "@/lib/db";
import { isAdminAction } from "../auth/auth-actions";
import { revalidatePath } from "next/cache";

export async function createMessageAction(data: z.infer<typeof createMessageSchema>) {
  try {
    const validated = createMessageSchema.parse(data)

    await db.contact.create({
      data: validated
    })

    return { success: true, message: 'Message Sent' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to send message' }
  }
}

export async function fetchAllMessage() {
  try {
    await isAdminAction()
    const messages = await db.contact.findMany()
    return messages
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export async function deleteMessageById(id: string) {
  try {
    await isAdminAction()

    await db.contact.delete({
      where: { id }
    })
    revalidatePath('/dashboard/messages')
    return { success: true, message: 'Message deleted' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to delete message' }

  }
}
