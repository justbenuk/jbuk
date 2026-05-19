"use client"

import { MenuIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MAINMENULIST } from "@/data/MainMenuList";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MainMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="flex size-6 items-center justify-center outline-none">
          <MenuIcon className="pointer-events-none size-6 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-6 min-w-0 p-0 gap-3 mt-3" align="center">
        {MAINMENULIST.map((menu) => {
          const Icon = menu.icon
          return (
            <DropdownMenuItem key={menu.name} asChild className="justify-center p-0">
              <Link href={menu.href} className="flex size-6 items-center justify-center">
                <Icon className="size-5 bg-none" />
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
