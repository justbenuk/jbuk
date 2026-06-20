import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function MobileMenu() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const MENUITEMS = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/posts",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ben Andrews</SheetTitle>
          <SheetDescription>Freelance Web Developer</SheetDescription>
        </SheetHeader>
        {MENUITEMS.map((item) => (
          <Link key={item.name} href={item.link} className="pl-4">
            {item.name}
          </Link>
        ))}
        <SheetFooter>
          {session?.user ? (
            <>
              <Button asChild>
                <Link href={"/client"}>Client</Link>
              </Button>
              {session.user.role === "admin" && (
                <Button asChild variant={"outline"}>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              )}
            </>
          ) : (
            <>
              <Button asChild>
                <Link href={"/login"}>Login</Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href={"/register"}>Register</Link>
              </Button>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
