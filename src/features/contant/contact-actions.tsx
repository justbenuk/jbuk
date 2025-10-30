'use server'
import z from "zod";
import { createMessageSchema, createNextStepsSchema } from "./contact-validators";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { MessageProps, NextStepsProps } from "@/types/messages-types";

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

export async function createNextSteps(data: z.infer<typeof createNextStepsSchema>) {
  try {
    const validated = createNextStepsSchema.parse(data)
    await db.projectMessage.create({
      data: validated
    })

    return { success: true, message: 'Message sent' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to send message' }

  }
}

export async function fetchAllMessage(): Promise<[MessageProps[], NextStepsProps[]]> {
  try {
    const [messages, nextSteps] = await Promise.all([
      db.contact.findMany(),
      db.projectMessage.findMany()
    ])
    return [messages, nextSteps]
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export async function deleteMessageById(id: string) {
  try {
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

export async function deleteNBextStepsById(id: string) {
  try {
    await db.projectMessage.delete({
      where: { id }
    })
    revalidatePath('/dashboard/messages')
    return { success: true, message: 'Message deleted' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to delete message' }

  }
}
