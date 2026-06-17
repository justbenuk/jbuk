import Link from "next/link";

const MENUITEMS = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/posts",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Menu() {
  return (
    <nav className="hidden lg:flex flex-row items-center justify-center gap-8">
      {MENUITEMS.map((item) => (
        <Link key={item.link} href={item.link}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
