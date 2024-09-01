"use client";
import { menuItems } from "@/data/menu-items";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AvvatarDropdown from "../page-sections/avatar-dropdown";
interface MIProps {
  title: string;
  href: string;
}

export default function MainMenu() {
  const { data: session, status } = useSession();

  return (
    <ul className="menu menu-horizontal px-1">
      {menuItems.map((menuItem: MIProps, idx: number) => (
        <li key={idx} className="font-semibold text-lg">
          <Link href={menuItem.href}>{menuItem.title}</Link>
        </li>
      ))}
      {session?.user ? (
        <li className="font-semibold text-lg">
          <AvvatarDropdown userimage={session?.user?.image as string} />
        </li>
      ) : (
        <li className="font-semibold text-lg">
          <Link href="/login">Login</Link>
        </li>
      )}
    </ul>
  );
}
