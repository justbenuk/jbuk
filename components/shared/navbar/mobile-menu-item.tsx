'use client'
import { MAINMENUITEMS } from "@/data/main-menu-items";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenuItem() {
  const pathname = usePathname()
  return (
    <div className="px-6 space-y-6">
      {MAINMENUITEMS.map((item, idx) => {
        const active = pathname === item.href && 'text-teal-500'
        return (
          <Link className={cn('flex flex-row items-center gap-8 border-b py-4', active)} key={idx} href={item.href}>
            <span><item.icon className="size-6" /></span>
            <h1 className="text-xl uppercase">{item.name}</h1>
          </Link>
        )
      }
      )}
    </div>
  )
}

