'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: {
    name: string
    href: string
  }
}

export default function DesktopMenuItem({ item }: Props) {
  const pathname = usePathname()
  return (
    <Link className={pathname === item.href ? 'underline decoration-green-500 underline-offset-8 text-green-500 font-bold decoration-2' : ''} href={item.href}><h1>{item.name}</h1></Link>
  )
}
