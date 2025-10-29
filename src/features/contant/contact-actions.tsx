'use server'

import z from "zod";
import { createMessageSchema } from "./contact-validators";
import { db } from "@/lib/db";
import { isAdminAction } from "../auth/auth-actions";

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
