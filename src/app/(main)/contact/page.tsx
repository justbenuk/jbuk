import PageContainer from "@/components/shared/PageContainer";
import ContactForm from "@/features/messages/forms/ContactForm";
import { Mail, MessageCircle, MousePointerClick } from "lucide-react";

const CONTACT_POINTS = [
  {
    icon: MessageCircle,
    title: "Tell me what you need",
    text: "A rough idea is enough. I can help shape the details.",
  },
  {
    icon: MousePointerClick,
    title: "No hard sell",
    text: "I will be straight about what is useful, realistic and worth doing.",
  },
  {
    icon: Mail,
    title: "Direct reply",
    text: "Your message goes straight to me, not a sales team.",
  },
];

export default function ContactPage() {
  return (
    <PageContainer size="dashboard" className="py-12 sm:py-16 lg:py-20">
      <section className="grid gap-10 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative isolate grid gap-8 lg:sticky lg:top-8">
          <div className="absolute -left-10 top-16 -z-10 h-64 w-64 rounded-full bg-card shadow-[0_0_110px_color-mix(in_oklch,var(--primary),transparent_78%)] ring-1 ring-border" />
          <div className="absolute bottom-0 right-4 -z-10 h-36 w-52 rounded-[999px] bg-muted shadow-[0_24px_70px_color-mix(in_oklch,var(--secondary),transparent_84%)] ring-1 ring-border" />

          <div className="grid gap-4">
            <p className="w-fit rounded-full border bg-card px-4 py-1 text-sm font-medium text-muted-foreground shadow-xs">
              Start a project
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Have an idea, problem, or site that needs sorting?
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Send over what you are thinking about. Whether it is a new site,
              a dashboard, a client portal or an existing project that needs
              attention, I will read it properly and reply directly.
            </p>
          </div>

          <div className="grid gap-3">
            {CONTACT_POINTS.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="flex gap-4 rounded-2xl bg-background/62 p-4 shadow-[0_12px_40px_color-mix(in_oklch,var(--foreground),transparent_94%)] ring-1 ring-border/60 backdrop-blur-sm"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="size-5" />
                  </div>
                  <div className="grid gap-1">
                    <h2 className="font-semibold">{point.title}</h2>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {point.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative self-center rounded-[2rem] bg-card p-5 shadow-[0_0_110px_color-mix(in_oklch,var(--primary),transparent_82%),0_24px_90px_color-mix(in_oklch,var(--foreground),transparent_93%)] ring-1 ring-border sm:p-8">
          <div className="absolute inset-x-8 -top-3 h-6 rounded-full bg-primary/20 blur-xl" />
          <ContactForm />
        </div>
      </section>
    </PageContainer>
  );
}
