import Container from "@/components/global/container";
import SocialList from "@/components/socials/social-list";

export default function Home() {
  return (
    <Container>
      <div className="w-2/3 mx-auto text-center">
        <h1 className="uppercase font-bold text-green-500 text-7xl">I build web applications</h1>
        <SocialList />
      </div>
    </Container>
  );
}
