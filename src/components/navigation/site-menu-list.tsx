import { menuItems } from "@/data/menu";
import SiteMenuItem from "./site-menu-item";

export default function SiteMenuList() {
  return (
    <ul className="flex flex-row items-center justify-center space-x-4">
      {menuItems.map((menuItem, idx) => (
        <SiteMenuItem key={idx} item={menuItem} />
      ))}
    </ul>
  )
}
