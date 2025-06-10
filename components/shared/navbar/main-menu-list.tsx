import { MAINMENUITEMS } from "@/data/main-menu-items";
import React from "react";
import MainMenuItem from "./main-menu-item";

export default function MainMenuList() {
  return (
    <nav className="hidden lg:flex flex-row gap-4 items-center">
      {MAINMENUITEMS.map((item, idx) => (
        <MainMenuItem key={idx} item={item} />
      ))}
    </nav>
  );
}
