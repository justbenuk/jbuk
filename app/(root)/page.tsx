import Container from "@/components/shared/container"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: 'Welcome'
}
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Container className="text-center">
        <h1 className="text-6xl lg:text-7xl uppercase font-semibold">Need A <span className="text-teal-500">Website</span>?</h1>
        <p className="lg:w-2/3 mx-auto">I am a self-taught freelance web developer, and I build full stack web applications using NextJS. Take a look at some of projects to see what I have been working on</p>
        <div className="mt-4 flex flex-row items-center justify-center gap-4">
          <Button asChild variant={'default'} size={'lg'} className="bg-teal-500">
            <Link href={'/lets-talk'} className="font-semibold uppercase">Lets Talk</Link>
          </Button>
          <Button asChild variant={'default'} size={'lg'}>
            <Link href={'/work'} className="font-semibold uppercase">Work</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
