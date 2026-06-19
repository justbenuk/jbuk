import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default async function MainUserMenu() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session)
    return (
      <div className="hidden lg:flex flex-row items-center justify-center gap-4">
        <Button variant={"outline"} asChild size={"lg"}>
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button asChild size={"lg"}>
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session.user.image as string} />
          <AvatarFallback>BA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={"/client"}>Client</Link>
        </DropdownMenuItem>
        {session.user.role === "admin" && (
          <DropdownMenuItem asChild>
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
