import LinerText from "@/components/shared/LinerText";
import MainContainer from "@/components/shared/MainContainer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <MainContainer className="w-full">
      <LinerText text="About Me" />
      <div className="space-y-4">
        <p>I don&apos;t wont to sell you anything, I build websites for fun. I have spent a long time while in a full time job teaching myself how to code with JavaScript. In the end i settled on NextJS. I started 15 years ago when I ran a very successful forum and wanted to change how it looked. Then over the years I have slowly moved up to where I am now.</p>
        <p>I am not the best, I am not the most professional, and I would say design is my weakest part. But I can turn your design ideas into anything. I am still learning, so I built this portfolio to showcase some of the projects I have worked on.</p>
        <p className="flex flex-row items-center gap-2">Check out my <Link href={'/projects'} className="underline text-primary flex flex-row items-center">Portfolio <ArrowRight className="size-4" /></Link> for more information.</p>
      </div>
    </MainContainer>
  )
}

