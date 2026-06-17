"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import z from "zod";
import { ContactFormSchema } from "./MessageValidationSchemas";
import { isAdmin } from "../Authentication/AuthenticationActions";

export async function createMessage(values: z.infer<typeof ContactFormSchema>) {
  try {
    const validated = ContactFormSchema.parse(values);

    await db.contact.create({
      data: validated,
    });
    revalidatePath("/dashboard/messages");
    return { success: true };
  } catch (error) {
    throw new Error(`Send Message: ${error}`);
  }
}

export async function fetchAllMessages() {
  await isAdmin();
  try {
    const data = await db.contact.findMany();
    return { success: true, data };
  } catch (error) {
    throw new Error(`Message fetch: ${error}`);
  }
}

export async function deleteMessageById(id: string) {
  await isAdmin();
  try {
    await db.contact.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/messages");
    return { success: true };
  } catch (error) {
    throw new Error(`Message Delete: ${error}`);
  }
}
