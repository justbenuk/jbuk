import { auth } from "@/lib/auth";
import { GlobalProps } from "@/types/global-types";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthTemplate({ children }: GlobalProps) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session) redirect('/client')

  return (
    <>{children}</>
  )
}

