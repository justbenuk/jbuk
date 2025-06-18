'use client'
import { MAINMENUITEMS } from "@/data/main-menu-items";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenuItems() {
  const pathname = usePathname()
  return (
    <div className="hidden lg:flex flex-row items-center justify-center space-x-6">
      {MAINMENUITEMS.map((item, idx) => {
        const active = pathname === item.href && 'text-teal-500'
        return (
          <Link className={cn('flex flex-row items-center space-x-2', active)} key={idx} href={item.href}>
            <span><item.icon className="size-4" /></span>
            <h1 className="text-sm uppercase font-semibold">{item.name}</h1>
          </Link>
        )
      }
      )}
    </div>
  )
}
