
import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import LinerText from "@/components/shared/LinerText";
import MainContainer from "@/components/shared/MainContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GlobalNotFound() {


  return (
    <div className="min-h-screen flex flex-col justify-between">
      <MainHeader />
      <MainContainer>
        <LinerText text="Sorry! Something went wrong" />
        <p>Looks like this page has gone missing, having a coffee or just doesn&apos;t want to work today</p>
        <div className="flex gap-4 py-6">
          <Button asChild variant={'ghost'} className="border-2 border-primary" size={'lg'}>
            <Link href={'/'}>Go Home</Link>
          </Button>
        </div>
      </MainContainer>
      <MainFooter />
    </div>

  )
}

