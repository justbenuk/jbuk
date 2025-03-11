import { menuItems } from "@/data/menuItems"
import NavItem from "./nav-item"

export default function NavList() {
  return (
    <ul className="hidden lg:flex items-center justify-center space-x-6">{menuItems.map((item, key) => (
      <NavItem key={key} item={item} />
    ))}</ul>
  )
}
