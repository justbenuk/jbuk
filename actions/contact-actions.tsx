'use server'

import { insertContactFormSchema } from "@/lib/validators";
import { z } from "zod";

export async function InsertContactFormAction(data: z.infer<typeof insertContactFormSchema>) {
  try {

    const validated = insertContactFormSchema.parse(data)
    console.log(validated)
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: 'Sorry! We could not send your message'
    }
  }

  return {
    success: true,
    message: 'Contact Form Sent'
  }
}
