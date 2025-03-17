'use client'

import Footer from "@/components/footer/footer"
import Container from "@/components/global/container"
import SiteNavigation from "@/components/navigation/site-navigation"
import { Button } from "@/components/ui/button"

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <SiteNavigation />
      <Container className="text-center">
        <h1 className="text-3xl font-semibold uppercase">Something Went Wrong</h1>
        <p className="my-4">{error.message}</p>
        <Button onClick={() => reset()} className="px-12 py-2 rounded-lg uppercase font-semibold text-white bg-green-500 shadow-xl">Try again</Button>
      </Container>
      <Footer />
    </div>
  )
}
