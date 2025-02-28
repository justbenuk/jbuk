import { MENUITEMS } from "@/data/menu-items"
import DesktopMenuItem from "./desktop-menu-item"

export default function DesktopMenuItems() {
  return (
    <nav className="flex flex-row space-x-14 font-semibold uppercase items-center">
      {MENUITEMS.map((menuItem, idx) => (
        <DesktopMenuItem key={idx} item={menuItem} />
      ))}
    </nav>
  )
}
