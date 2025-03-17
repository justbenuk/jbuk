'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: {
    name: string
    href: string
  }
}

export default function SiteMenuItem({ item }: Props) {

  //get the pathname for the active link 
  const pathname = usePathname()
  return (
    <Link className={cn('text-sm uppercase font-semibold', pathname === item.href && 'text-green-500')} href={item.href}>{item.name}</Link>
  )
}
