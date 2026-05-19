import HomeHeroSection from "@/components/pages/home/HomeHeroSection";
import HomePanningSection from "@/components/pages/home/HomePanningSection";
import MainContainer from "@/components/shared/MainContainer";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <MainContainer className="grid gap-20 mt-20 w-full">
        <HomePanningSection />
      </MainContainer>
    </>
  );
}
