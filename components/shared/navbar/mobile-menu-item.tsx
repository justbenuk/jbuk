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
          <Link className={cn('flex flex-row items-center ml-10 gap-4 text-sm font-semibold', active)} key={idx} href={item.href}>
            <span><item.icon className="size-4" /></span>
            {item.name}
          </Link>
        )
      }
      )}
    </div>
  )
}

