import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 text-center justify-center">
        <h1 className="text-[100px] font-bold leading-15">404</h1>
        <p className="">We couldn&apos;t find the page you are looking for. Probably the link is broken</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size={'lg'} variant={'default'} className="bg-yellow-500">
            <Link href={'/'}>Take me home</Link>
          </Button>
          <Button asChild size={'lg'} variant={'secondary'}>
            <Link href={'/lets-talk'}>I need help</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

