import Link from "next/link";
import { ReactNode } from "react";

interface BLProps {
  route: string;
  children: ReactNode;
}
export default function ButtonLink({ children, route }: BLProps) {
  return (
    <Link
      href={route}
      className=" border-2 border-gray-900 px-8 py-2 text-lg uppercase font-bold rounded hover:border-gray-400 hover:bg-gray-400 hover:text-white transition colors duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
}
