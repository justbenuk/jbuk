import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "./ui/button";

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
  return <div>logged in menu</div>;
}
