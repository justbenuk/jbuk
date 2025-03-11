import PageContainer from "@/components/global/page-container";
import SectionTitle from "@/components/global/section-title";
import Hero from "@/components/hero/hero";
import Stack from "@/components/stack/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <PageContainer className="mt-10">
        <Stack />
        <SectionTitle title='Past Projects' description="Here’s a collection of everything I’ve built, some of it even works! You can find all my code on GitHub, and if you have questions, I’ll do my best to answer (or at least Google really fast)." />
        <SectionTitle title='my Blog' description="I tried my hand at blogging about web development, because why not? It might be boring, or it might be the most exciting thing you read today (unlikely, but hey, anything’s possible). Give it a scroll, you might just find something useful!" />
        <SectionTitle title='Contact Me' description="Got a project you need help with? Hit me up! Whether it's a brand-new site or an existing one that’s throwing a tantrum, I’m here to fix, build, and make the internet a better place, one bug at a time." />
      </PageContainer>
    </>
  );
}
