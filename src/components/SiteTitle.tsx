import Link from "next/link";

export default function SiteTitle() {
  return (
    <Link href={"/"} className="text-xl flex flex-row items-center gap-2">
      Ben <span className="hidden md:flex">Andrews</span>
    </Link>
  );
}
