import PageContainer from "@/components/shared/PageContainer";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const VALUES = [
  "Clear communication without agency layers",
  "Practical choices that fit the actual project",
  "Websites and tools that stay easy to manage",
];

const NOTES = [
  {
    title: "Self-taught",
    text: "I have learned by building real things, solving real problems, and improving the parts that were awkward the first time round.",
  },
  {
    title: "Solo by choice",
    text: "You deal directly with the person designing, building, debugging and maintaining the work.",
  },
  {
    title: "Honest scope",
    text: "I care more about useful, maintainable systems than over-selling complexity you do not need.",
  },
];

export default function AboutPage() {
  return (
    <PageContainer size="dashboard" className="py-12 sm:py-16 lg:py-20">
      <section className="grid gap-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div className="relative isolate grid gap-7">
            <div className="absolute -left-8 top-10 -z-10 h-64 w-64 rounded-full bg-card shadow-[0_0_110px_color-mix(in_oklch,var(--primary),transparent_78%)] ring-1 ring-border" />
            <div className="absolute bottom-4 right-8 -z-10 h-40 w-56 rounded-[999px] bg-muted shadow-[0_24px_70px_color-mix(in_oklch,var(--secondary),transparent_84%)] ring-1 ring-border" />

            <p className="w-fit rounded-full border bg-card px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs">
              About me
            </p>
            <div className="grid gap-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                A solo, self-taught developer building useful things for real
                people.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                I am Ben, a freelance web developer in the Midlands. I work
                closely with clients who need a website, dashboard, portal or
                custom tool that is well considered, easy to use and built with
                care.
              </p>
            </div>

            <ul className="grid max-w-2xl gap-3">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 rounded-md bg-background/60 px-4 py-3 shadow-[0_8px_28px_color-mix(in_oklch,var(--background),transparent_35%)] ring-1 ring-border/50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto grid size-80 place-items-center rounded-full bg-card shadow-[0_0_120px_color-mix(in_oklch,var(--primary),transparent_76%),0_30px_110px_color-mix(in_oklch,var(--foreground),transparent_92%)] ring-1 ring-border sm:size-96">
            <div className="relative size-64 overflow-hidden rounded-full bg-muted ring-1 ring-border sm:size-80">
              <Image
                src="/assets/me-nobg.png"
                alt="Ben Andrews"
                fill
                priority
                sizes="(min-width: 640px) 320px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {NOTES.map((note) => (
            <article
              key={note.title}
              className="grid gap-3 rounded-3xl bg-card p-6 shadow-[0_18px_60px_color-mix(in_oklch,var(--foreground),transparent_93%)] ring-1 ring-border"
            >
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="leading-7 text-muted-foreground">{note.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
