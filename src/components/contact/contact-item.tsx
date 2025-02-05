import Link from "next/link";
import { ReactNode } from "react";

type ContactItemProps = {
  link: string;
  icon: ReactNode;
  title: string;
  text: string;
};
export default function ContactItem({
  link,
  icon,
  text,
  title,
}: ContactItemProps) {
  return (
    <Link href={link}>
      <li className="flex flex-row items-center gap-6">
        <div className="border rounded-full p-4">{icon}</div>
        <div className="flex flex-col gap-3">
          <h1 className="uppercase text-xl font-semibold">{title}</h1>
          <p>{text}</p>
        </div>
      </li>
    </Link>
  );
}
