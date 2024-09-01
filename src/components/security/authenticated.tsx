"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
interface AUProps {
  children: ReactNode;
}
export default function Authenticated({ children }: AUProps) {
  const { data: session, status } = useSession();

  if (status !== ("authenticated" as string)) {
    return redirect("/login");
  }
  return <>{children}</>;
}
