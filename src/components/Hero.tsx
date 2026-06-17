import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const HERO_POINTS = [
  "Direct access to the developer",
  "Lean builds without agency overhead",
  "Practical systems that are easy to manage",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-16 sm:py-20 lg:py-12">
      <div className="mx-auto grid max-w-7xl place-items-center">
        <div className="relative grid min-h-[520px] w-full max-w-5xl place-items-center sm:min-h-[560px]">
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-card shadow-[0_0_110px_color-mix(in_oklch,var(--primary),transparent_76%),0_34px_120px_color-mix(in_oklch,var(--foreground),transparent_92%),inset_0_0_44px_color-mix(in_oklch,var(--primary),transparent_88%)] ring-1 ring-border/70 sm:w-[82%]" />
          <div className="absolute left-[6%] top-[18%] h-24 w-24 rounded-full bg-card shadow-[0_18px_50px_color-mix(in_oklch,var(--foreground),transparent_90%)] ring-1 ring-border sm:h-32 sm:w-32" />
          <div className="absolute left-[15%] top-[7%] h-28 w-36 rounded-[999px] bg-muted shadow-[0_24px_60px_color-mix(in_oklch,var(--primary),transparent_84%)] ring-1 ring-border sm:h-36 sm:w-48" />
          <div className="absolute right-[10%] top-[10%] h-28 w-28 rounded-full bg-card shadow-[0_20px_58px_color-mix(in_oklch,var(--foreground),transparent_90%)] ring-1 ring-border sm:h-40 sm:w-40" />
          <div className="absolute right-[2%] top-[34%] h-24 w-32 rounded-[999px] bg-muted shadow-[0_24px_64px_color-mix(in_oklch,var(--secondary),transparent_82%)] ring-1 ring-border sm:h-36 sm:w-48" />
          <div className="absolute bottom-[11%] left-[12%] h-28 w-28 rounded-full bg-card shadow-[0_24px_64px_color-mix(in_oklch,var(--primary),transparent_86%)] ring-1 ring-border sm:h-44 sm:w-44" />
          <div className="absolute bottom-[8%] right-[17%] h-24 w-36 rounded-[999px] bg-card shadow-[0_24px_64px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border sm:h-32 sm:w-52" />

          <div className="relative z-10 mx-auto grid max-w-3xl gap-7 px-6 py-10 text-center sm:px-10 lg:px-14">
            <div className="mx-auto w-fit rounded-full border bg-card px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs">
              Freelance web design and development
            </div>

            <div className="grid gap-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                Thoughtful websites and tools for people who need things built
                properly.
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                I work directly with clients to design, build, and maintain
                fast, practical web products without the noise of a big agency.
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Start a project
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/projects">View work</Link>
              </Button>
            </div>

            <ul className="mx-auto grid max-w-2xl gap-2 text-left text-sm text-foreground/80 sm:grid-cols-3">
              {HERO_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 rounded-md bg-background/55 px-3 py-2 shadow-[0_8px_28px_color-mix(in_oklch,var(--background),transparent_35%)] ring-1 ring-border/50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
