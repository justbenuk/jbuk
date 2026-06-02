import MainContainer from "@/components/shared/MainContainer";
import LinerText from "@/components/shared/LinerText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DoorOpenIcon, LockIcon } from "lucide-react";

export default function AuthPage() {
  return (
    <MainContainer className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="border-2 flex flex-col items-center justify-center gap-4 p-8">
          <LinerText text='Login' size="text-2xl lg:text-4xl" />
          <p className="text-center">I am currently building the client side to this site. So even if you are a client, there may be no need to register</p>
          <Button asChild>
            <Link href={'/login'}>
              <DoorOpenIcon />
              <span>Enter</span>
            </Link>
          </Button>
        </div>
        <div className="border-2 flex flex-col items-center justify-center gap-4 p-8">
          <LinerText text='Register' size="text-2xl lg:text-4xl" />
          <p className="text-center">All accounts not associated with a client will be removed</p>
          <Button asChild>
            <Link href={'/login'}>
              <LockIcon />
              <span>Register</span>
            </Link>
          </Button>
        </div>
      </div>
    </MainContainer>
  )
}

