import { BiMobile } from "react-icons/bi";
import { SiGit, SiGithub, SiLaravel, SiMongodb, SiNextdotjs, SiNextui, SiPrisma, SiReact, SiShadcnui, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Stack() {
  return (
    <div className="mt-10">
      <ul className="flex flex-wrap flex-gorw items-center justify-center gap-2 w-full">
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiReact size={28} /><span className="hidden lg:block text-md font-semibold uppercase">React</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiNextdotjs size={28} /><span className="hidden lg:block text-md font-semibold uppercase">NextJs</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiTailwindcss size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Tailwind</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiShadcnui size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Shadcn/ui</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiPrisma size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Prisma</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiNextui size={28} /><span className="hidden lg:block text-md font-semibold uppercase">NextUI</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiGit size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Git</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiGithub size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Github</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><BiMobile size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Responsive</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiMongodb size={28} /><span className="hidden lg:block text-md font-semibold uppercase">MongoDB</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiSqlite size={28} /><span className="hidden lg:block text-md font-semibold uppercase">SQL</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiLaravel size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Laravel</span></li>
        <li className="border px-12 py-4 flex flex-row gap-4 items-center justify-center hover:flex-grow"><SiTypescript size={28} /><span className="hidden lg:block text-md font-semibold uppercase">Typescript</span></li>
      </ul>
    </div>
  )
}
