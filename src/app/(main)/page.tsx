import MainPageTitle from "@/components/page-sections/main-page-title";
import ButtonLink from "@/components/ui/buttons-and-links/button-link";
import Link from "next/link";
import Image from "next/image";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandPrisma,
  TbSeo,
} from "react-icons/tb";
import { workItems } from "@/data/work-items";
interface WIProps {
  title: string;
  image: string;
  slug: string;
}
export default function Home() {
  return (
    <>
      <MainPageTitle
        tag="Freelance Web Developer"
        title="Having A Website Has Never Been So Easy"
      >
        In today&apos;s world, where the internet plays a central role in nearly
        every aspect of life, having an online presence is essential. The
        biggest challenge businesses face is getting noticed. Let&apos;s work
        together to change that.
      </MainPageTitle>
      <div
        className="mt-20 px-6"
        style={{
          backgroundImage: `url("/images/bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40rem",
        }}
      ></div>
      {/* ABOUT SECTION */}
      <div id="about" className="py-44 container mx-auto px-6 2xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="order-2 xl:order-1 overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="about image"
              className="h-auto w-auto mx-auto"
              height={300}
              width={300}
            />
          </div>
          <div className="text-center xl:text-start order-1 xl:order-2">
            <h1 className="text-sm md:text-xl lg:text-2xl uppercase text-gray-400 font-semibold">
              About Me
            </h1>
            <h1 className="text-4xl xl:w-3/4 md:text-5xl lg:text-6xl py-2 font-extrabold italic uppercase">
              I Am Here To Help You
            </h1>
            <p className="leading-8 xl:w-3/4">
              I started learning web developement over 15 years ago mainly using
              WordPress and Forums. I created some simple custom themes and one
              or two plugins. I always wanted to do more, so I started to learn
              Javascript. I started with React and then moved on to NextJS, and
              I have been here ever since.
            </p>
            <div className="pt-10">
              <ButtonLink route="/contact">Get started</ButtonLink>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES SECTION */}
      <div className="py-34 bg-blend-color bg-zinc-100">
        <div id="services" className="container mx-auto px-6 2xl:px-0 pt-20">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="text-center xl:text-start">
              <h1 className="text-sm md:text-xl lg:text-2xl uppercase text-gray-400 font-semibold">
                My Services
              </h1>
              <h1 className="text-4xl xl:w-3/4 md:text-5xl lg:text-6xl py-2 font-extrabold italic uppercase">
                What Can I Do For You
              </h1>
              <p className="leading-8">
                I can help you take your business or project online. I
                don&apos;t claim to be the best, but I&apos;m here to bridge the
                gap. I&apos;ll create a custom web application tailored to your
                specifications and support you throughout your journey to online
                success.
              </p>
            </div>
            <div className="hidden xl:flex"></div>
          </div>
        </div>
        <div className="container mx-auto px-6 xl:px-0 pt-20 border-b-2 border-gray-200 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center justify-center italic">
              <TbBrandNextjs className="text-6xl font-bold" />
              <p className="text-2xl font-bold">NextJS</p>
            </div>
            <div className="flex flex-col items-center justify-center italic">
              <TbBrandTailwind className="text-6xl font-bold" />
              <p className="text-2xl font-bold">TailwindCSS</p>
            </div>
            <div className="flex flex-col items-center justify-center italic">
              <TbBrandPrisma className="text-6xl font-bold" />
              <p className="text-2xl font-bold">Prisma.io</p>
            </div>
            <div className="flex flex-col items-center justify-center italic">
              <TbSeo className="text-6xl font-bold" />
              <p className="text-2xl font-bold">S.E.O</p>
            </div>
          </div>
        </div>
        {/* WORK SECTION */}
        <div id="work" className="py-20 container mx-auto">
          <div className="text-center">
            <h1 className="text-sm md:text-xl lg:text-2xl uppercase text-gray-400 font-semibold">
              My Work
            </h1>
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl py-2 font-extrabold italic uppercase">
              Recent Work
            </h1>
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
                {workItems.map((workItem: WIProps, idx: number) => (
                  <Link
                    key={idx}
                    href={`/work/${workItem.slug}`}
                    className="overflow-hidden"
                  >
                    <Image
                      src={workItem.image}
                      alt="image"
                      height={300}
                      width={300}
                      className="w-full h-full hover:scale-125 transition-all delay-150"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <ButtonLink route="/projects">See More</ButtonLink>
            </div>
          </div>
        </div>
      </div>
      {/* LETS TALK */}
      <div className="container mx-auto px-6 2xl:px-0 py-36">
        <div className="text-center">
          <h1 className="text-sm md:text-xl lg:text-2xl uppercase text-gray-400 font-semibold">
            Lets Talk
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-extrabold italic uppercase">
            Are You Ready To Make A Move
          </h1>
          <p>Lets catch up and discuss your project...</p>
          <div className="mt-10">
            <ButtonLink route="/contact">Get Started</ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
