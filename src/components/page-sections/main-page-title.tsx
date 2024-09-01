import { ReactNode } from "react";

interface MPTProps {
  tag: string;
  title: string;
  children: ReactNode;
}

export default function MainPageTitle({ tag, title, children }: MPTProps) {
  return (
    <div className="h-[50dvh] md:h-[40dvh] 2xl:h-[30dvh] flex flex-col items-start justify-end container mx-auto px-6 2xl:px-0">
      <h1 className="text-sm md:text-xl lg:text-2xl uppercase text-gray-400 font-semibold">
        {tag}
      </h1>
      <h1 className=" text-4xl md:w-3/4 md:text-5xl lg:text-6xl py-2 font-extrabold italic uppercase">
        {title}
      </h1>
      <p className="leading-8 md:w-3/4">{children}</p>
    </div>
  );
}
