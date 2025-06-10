import React from "react";
import Container from "../container";
import MainMenuList from "../navbar/main-menu-list";
import MobileNavbar from "../navbar/mobile-navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b py-4">
      <Container className="flex flex-row justify-between">
        <Link href={'/'}>
          <h1 className="uppercase font-semibold">Ben Andrews</h1>
        </Link>
        <MainMenuList />
        <MobileNavbar />
      </Container>
    </header>
  );
}
