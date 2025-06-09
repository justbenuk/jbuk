'use server'
import { db } from "@/lib/db";
import { insertContactFormSchema } from "@/lib/validators";
import { z } from "zod";

export async function InsertContactFormAction(data: z.infer<typeof insertContactFormSchema>) {
  try {
    //validate the data from the form 
    const validated = insertContactFormSchema.parse(data)

    //add the form the db
    await db.contact.create({ data: validated })
    return {
      success: true,
      message: 'Contact Form Sent'
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: 'Sorry! We could not send your message'
    }
  }
}
