'use client'
import { MAINMENUITEMS } from "@/data/main-menu-items";
import MainMenuItem from "./main-menu-item";

export default function MainNavbar() {
  return (
    <nav className="hidden lg:flex items-center flex-row gap-4">
      {MAINMENUITEMS.map((item, idx) => (
        <MainMenuItem key={idx} item={item} />
      ))}
    </nav>
  )
}

