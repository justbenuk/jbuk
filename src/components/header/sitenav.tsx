import Link from "next/link";
import Logo from "../global/logo";
import NavList from "./navlist";
import MobileList from "./mobile-list";

export default function SiteNav() {
  return (
    <header className="border-b py-4 flex flex-row items-center justify-between px-6">
      <Logo />
      <NavList />
      <div className="flex flex-row items-center">
        <div className="hidden lg:flex flex-row space-x-6 items-center uppercase text-sm font-semibold">
          <Link href='/login'>Login</Link>
          <Link href='/register'>register</Link>
        </div>
        <div className="lg:hidden">
          <MobileList />
        </div>
      </div>
    </header>
  )
}
