'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type DesktopMenuProps = {
  item: {
    name: string
    href: string
  }
}
export default function DesktopMenuitem({ item }: DesktopMenuProps) {
  const pathname = usePathname()
  const active = item.href === pathname && 'font-bold'
  return (
    <Link href={item.href} className={cn('', active)}>{item.name}</Link>
  )
}

