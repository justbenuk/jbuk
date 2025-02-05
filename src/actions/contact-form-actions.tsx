"use server";

import { redirect } from "next/navigation";

export async function addContactMessage(
  prevState: any,
  formData: formData,
): Promise<{ message: string }> {
  try {
    const data = Object.fromEntries(formData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  redirect("/contact");
}
