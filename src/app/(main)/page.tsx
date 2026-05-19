import HomeBlogSection from "@/components/pages/home/HomeBlogSection";
import HomeHeroSection from "@/components/pages/home/HomeHeroSection";
import HomePanningSection from "@/components/pages/home/HomePanningSection";
import MainContainer from "@/components/shared/MainContainer";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <MainContainer className="grid gap-30 my-30 w-full">
        <HomePanningSection />
        <HomeBlogSection />
      </MainContainer>
    </>
  );
}
