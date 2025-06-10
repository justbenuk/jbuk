import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type MainMenuItemProps = {
  item: {
    href: string;
    name: string;
    icon: LucideIcon;
  };
};

export default function MainMenuItem({ item }: MainMenuItemProps) {
  return (
    <Link
      href={item.href}
      className="flex flex-row items-center gap-2 uppercase text-sm font-semibold"
    >
      <span>
        <item.icon className="size-4" />
      </span>
      {item.name}
    </Link>
  );
}
