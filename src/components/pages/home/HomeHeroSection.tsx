import { MouseIcon } from "lucide-react";

export default function HomeHeroSection() {
  return (
    <section className="relative grid min-h-[calc(100dvh-5rem)] place-items-center px-6 text-center">
      <div>
        <h1 className="bg-linear-to-tr from-white to-primary bg-clip-text text-5xl font-bold text-transparent sm:text-7xl lg:text-8xl">I Build Custom<br /> Web Applications</h1>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <MouseIcon className="size-8 animate-bounce text-primary" />
      </div>
    </section>
  )
}
