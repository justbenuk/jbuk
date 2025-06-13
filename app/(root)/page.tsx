import Hero from "@/components/hero/hero";
import Container from "@/components/shared/container";

export const metadata = {
  title: "Welcome",
};
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">
                Web development the<span className="text-yellow-500"> easy</span> way
              </h1>
            </div>
            <div>
              <p>I am a freelance web developer and I build custom web applications. I work on new and existing projects, large or small. What ever you need, I&apos;m only a call away</p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <p>portfolio</p>
        </div>
        <div className="py-10">
          <p>call to action</p>
        </div>
        <div className="PY-10">
          <p>blog</p>
        </div>
      </Container>
    </>
  );
}
