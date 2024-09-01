import { ReactNode } from "react";
import { TbGlobe } from "react-icons/tb";

interface SLProps {
  children: ReactNode;
  route: string;
}
export default function SiteLink({ children, route }: SLProps) {
  return (
    <a
      target="_blank"
      href={route}
      className="flex flex-row gap-2 items-center justify-center border-3 border-blue-500 bg-blue-500 text-white px-8 py-2 text-lg uppercase font-bold rounded hover:border-blue-700 hover:bg-blue-700 hover:text-white transition colors duration-300 ease-in-out"
    >
      <span>
        <TbGlobe />
      </span>
      {children}
    </a>
  );
}
