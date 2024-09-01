"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
interface AUProps {
  children: ReactNode;
}
export default function AdminUser({ children }: AUProps) {
  const { data: session, status } = useSession();

  if (!session) {
    return redirect("/login");
  }

  if (session.user.role !== "Admin") {
    return redirect("/profile");
  }

  return <>{children}</>;
}
