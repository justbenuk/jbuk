import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthMenu() {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-row items-center space-x-4">
        <Button asChild variant={'default'} className="bg-teal-500">
          <Link href={'/login'}>Login</Link>
        </Button>
        <Button asChild variant={'secondary'}>
          <Link href={'/register'}>Register</Link>
        </Button>
      </div>
    </div>
  )
}

