import { SITEMENUITEMS } from "@/data/site-menu-items";
import DesktopMenuitem from "./desktop-menu-item";

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex flex-row items-center justify-center gap-4">
      {SITEMENUITEMS.map((item, idx) => (
        <DesktopMenuitem key={idx} item={item} />
      ))}
    </nav>
  )
}

