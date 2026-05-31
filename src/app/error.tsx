'use client'

import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import LinerText from "@/components/shared/LinerText";
import MainContainer from "@/components/shared/MainContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function ErrorPage({ error, unstable_retry }: ErrorProps) {

  useEffect(() => {
    console.error(error)
  }, [error])


  return (
    <div className="min-h-screen flex flex-col justify-between">
      <MainHeader />
      <MainContainer>
        <LinerText text="Sorry! Something went wrong" />
        <p className="border-2 border-dashed border-red-500 rounded-2xl p-6 bg-red-500/10 dark:bg-red-500/60 mt-6">{error.message}</p>
        <div className="flex gap-4 py-6">
          <Button onClick={() => unstable_retry()} size={'lg'}>Try Again</Button>
          <Button asChild variant={'ghost'} className="border-2 border-primary" size={'lg'}>
            <Link href={'/'}>Go Home</Link>
          </Button>
        </div>
      </MainContainer>
      <MainFooter />
    </div>

  )
}

