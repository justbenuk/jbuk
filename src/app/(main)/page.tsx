import PageContainer from "@/components/global/page-container";
import SectionTitle from "@/components/global/section-title";
import Hero from "@/components/hero/hero";
import CurrentProject from "@/components/projects/current-project";
import Stack from "@/components/stack/stack";
import FrontContactForm from "@/forms/front-contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <PageContainer>
        <Stack />
        <div className="pt-24">
          <CurrentProject />
        </div>
        <div className="pt-24">
          <SectionTitle title='Past Projects' description="Here’s a collection of everything I’ve built, some of it even works! You can find all my code on GitHub, and if you have questions, I’ll do my best to answer (or at least Google really fast)." />
        </div>
        <div className="p7-24">
          <SectionTitle title='my Blog' description="I tried my hand at blogging about web development, because why not? It might be boring, or it might be the most exciting thing you read today (unlikely, but hey, anything’s possible). Give it a scroll, you might just find something useful!" />
        </div>
      </PageContainer>
      <div className="pt-24">
        <div style={{ backgroundImage: `url('/assets/bg4.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="h-full bg-black/50 text-white pt-8">
            <PageContainer>
              <SectionTitle title='Contact Me' description="Got a project you need help with? Hit me up! Whether it's a brand-new site or an existing one that’s throwing a tantrum, I’m here to fix, build, and make the internet a better place, one bug at a time." />
              <div className="py-24 max-w-3xl mx-auto shadow-2xl">
                <FrontContactForm />
              </div>
            </PageContainer>
          </div>
        </div>
      </div>
    </>
  );
}
