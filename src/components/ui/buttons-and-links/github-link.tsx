import { ReactNode } from "react";
import { TbBrandGithub } from "react-icons/tb";

interface GLProps {
  children: ReactNode;
  route: string;
}
export default function GithubLink({ children, route }: GLProps) {
  return (
    <a
      target="_blank"
      href={route}
      className="flex flex-row gap-2 items-center justify-center border-3 border-red-500 bg-red-500 text-white px-8 py-2 text-lg uppercase font-bold rounded hover:border-red-700 hover:bg-red-700 hover:text-white transition colors duration-300 ease-in-out"
    >
      <span>
        <TbBrandGithub />
      </span>
      {children}
    </a>
  );
}
