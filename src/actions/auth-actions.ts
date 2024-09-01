"use server";
import { signIn } from "@/utils/auth";
export async function LoginUser() {
  await signIn("google", { redirectTo: "/" });
}
