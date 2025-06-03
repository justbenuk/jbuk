'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenuItem({ item }: { item: { name: string, href: string } }) {
  const pathname = usePathname()
  const active = pathname === item.href && 'text-teal-500 underline underline-offset-8 decoration-2'
  return (
    <Link href={item.href} className={cn('uppercase font-semibold text-xs', active)}>{item.name}</Link>
  )
}

