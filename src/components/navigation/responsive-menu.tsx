import { menuItems } from "@/data/menu-items";
import Link from "next/link";

interface RMProps {
  title: string;
  href: string;
}

export default function ResponsiveMenu() {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 z-[1] w-[75dvw] border mt-3"
    >
      {menuItems.map((menuItem: RMProps, idx: number) => (
        <li key={idx}>
          <Link href={menuItem.href}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  );
}
