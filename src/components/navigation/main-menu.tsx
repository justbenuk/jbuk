import { menuItems } from "@/data/menu-items";
import Link from "next/link";

interface MIProps {
  title: string;
  href: string;
}

export default function MainMenu() {
  return (
    <ul className="menu menu-horizontal px-1">
      {menuItems.map((menuItem: MIProps, idx: number) => (
        <li key={idx} className="font-semibold text-lg">
          <Link href={menuItem.href}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  );
}
