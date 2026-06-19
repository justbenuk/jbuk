import PageContainer from "@/components/shared/PageContainer";
import Image from "next/image";

const SERVICES = [
  {
    name: "Next.js",
    position: "left-[6%] top-[12%]",
    line: "left-[26%] top-[29%] w-[22%] rotate-[22deg]",
    text: "The backbone for fast websites, dashboards, client portals and content-driven pages.",
  },
  {
    name: "React",
    position: "right-[8%] top-[14%]",
    line: "right-[27%] top-[30%] w-[20%] -rotate-[20deg]",
    text: "Reusable interfaces that stay manageable as your site grows and changes.",
  },
  {
    name: "TypeScript",
    position: "left-[3%] top-[48%]",
    line: "left-[24%] top-[50%] w-[22%]",
    text: "Extra confidence in the code, with fewer avoidable mistakes making it into production.",
  },
  {
    name: "Tailwind CSS",
    position: "right-[3%] top-[46%]",
    line: "right-[24%] top-[49%] w-[22%]",
    text: "Clean, responsive styling without fighting a heavy design system.",
  },
  {
    name: "Prisma",
    position: "left-[16%] bottom-[10%]",
    line: "left-[30%] bottom-[28%] w-[18%] -rotate-[22deg]",
    text: "A sensible database layer for admin tools, content, users, projects and relationships.",
  },
  {
    name: "PostgreSQL",
    position: "right-[13%] bottom-[9%]",
    line: "right-[29%] bottom-[27%] w-[18%] rotate-[23deg]",
    text: "Reliable data storage for the parts of the site that need to last.",
  },
];

export default function ServicesPage() {
  return (
    <PageContainer size="dashboard" className="py-12 sm:py-16 lg:py-20">
      <section className="grid gap-12">
        <div className="mx-auto grid max-w-3xl gap-4 text-center">
          <p className="mx-auto w-fit rounded-full border bg-card px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs">
            How I build
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            A focused stack for practical websites and tools.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I keep the stack tight so projects stay fast, maintainable and easy
            to improve after launch.
          </p>
        </div>

        <div className="relative mx-auto hidden min-h-170 w-full max-w-6xl overflow-hidden rounded-[2.5rem] lg:block">
          <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card shadow-[0_0_120px_color-mix(in_oklch,var(--primary),transparent_76%),0_30px_110px_color-mix(in_oklch,var(--foreground),transparent_92%)] ring-1 ring-border" />

          {SERVICES.map((service) => (
            <div
              key={`${service.name}-line`}
              className={`absolute h-px origin-center bg-border/80 shadow-[0_0_28px_color-mix(in_oklch,var(--primary),transparent_72%)] ${service.line}`}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 z-10 grid size-72 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background/65 p-4 shadow-[0_0_70px_color-mix(in_oklch,var(--background),transparent_8%)] ring-1 ring-border/70 backdrop-blur-sm">
            <div className="relative size-60 overflow-hidden rounded-full bg-muted ring-1 ring-border">
              <Image
                src="/assets/me-nobg.png"
                alt="Ben Andrews"
                fill
                priority
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          {SERVICES.map((service) => (
            <article
              key={service.name}
              className={`absolute z-20 grid w-60 gap-2 rounded-3xl bg-background/72 p-5 shadow-[0_18px_60px_color-mix(in_oklch,var(--foreground),transparent_91%)] ring-1 ring-border/60 backdrop-blur-sm ${service.position}`}
            >
              <h2 className="text-lg font-semibold">{service.name}</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                {service.text}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:hidden">
          <div className="mx-auto grid size-56 place-items-center rounded-full bg-card p-3 shadow-[0_0_80px_color-mix(in_oklch,var(--primary),transparent_78%)] ring-1 ring-border">
            <div className="relative size-48 overflow-hidden rounded-full bg-muted ring-1 ring-border">
              <Image
                src="/assets/me-nobg.png"
                alt="Ben Andrews"
                fill
                priority
                sizes="192px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.name}
                className="grid gap-2 rounded-2xl bg-card p-5 shadow-xs ring-1 ring-border"
              >
                <h2 className="text-lg font-semibold">{service.name}</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
