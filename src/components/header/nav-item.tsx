'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
type Props = {
  item: {
    name: string
    href: string
  }
}
export default function NavItem({ item }: Props) {
  const pathName = usePathname()
  const active = pathName === item.href && 'underline decoration-3 decoration-green-500 underline-offset-8'
  return (
    <Link className={cn('uppercase font-semibold text-sm', active)} href={item.href}>{item.name}</Link>
  )
}
