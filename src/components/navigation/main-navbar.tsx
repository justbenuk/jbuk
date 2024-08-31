import Link from "next/link";
import MainMenu from "./main-menu";
import ResponsiveMenu from "./responsive-menu";
export default function MainNavbar() {
  return (
    <div className="navbar bg-base-100 lg:px-6 lg:py-3 bg-white/90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* responsive items will go here */}
          <ResponsiveMenu />
        </div>
        <Link href="/" className="font-bold italic text-4xl">
          JBUK
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <MainMenu />
      </div>
    </div>
  );
}
