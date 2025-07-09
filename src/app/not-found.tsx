import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center lg:leading-40 text-center px-6">
      <h1 className="font-bold text-7xl lg:text-[172px] text-black/30">404</h1>
      <h3 className="text-xl lg:text-2xl font-semibold">Sorry Page Not Found</h3>
      <p className="lg:text-lg">I couldn&apos;t find the page you are looking for. I think it may be on another tea break.</p>
      <Button asChild variant={'default'} size={'lg'}>
        <Link href={'/'} className="mt-6">
          <FaArrowLeftLong />
          <span>Go Home</span>
        </Link>
      </Button>
    </div>
  )
}

