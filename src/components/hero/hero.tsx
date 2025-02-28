import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="h-[70dvh] flex flex-col items-center justify-center" style={{ backgroundImage: `url('/images/assets/bg2.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="bg-black/10 w-full h-full flex items-center justify-center">
        <Container className="flex flex-col items-center justify-center">
          <h1 className="uppercase font-bold text-7xl">Hey, I&apos;m Ben Andrews</h1>
          <p className="py-12 font-medium text-center text-xl lg:w-4/5 lg:mx-auto">I’m a self-taught freelance web developer, which means I learned everything from YouTube, Google, and sheer panic. I build websites, fix my own mistakes, and pretend I knew what I was doing all along. Fake it till you make it, right?</p>
          <Button asChild variant='default' size='lg' className="shadow-xl">
            <Link href='/projects'>Projects</Link>
          </Button>
        </Container>
      </div>
    </div >
  )
}
