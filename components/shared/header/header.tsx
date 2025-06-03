import Logo from "../logo";
import MainNavbar from "../navbar/main-navbar";
import MobileNavbar from "../navbar/mobile-navbar";
import ToggleMode from "../navbar/toggle-mode";

export default function Header() {
  return (
    <header className="flex flex-row justify-between py-4 px-6 border-b items-center">
      <div className="flex flex-row items-center gap-10">
        <Logo />
        <MainNavbar />
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <ToggleMode />
        <MobileNavbar />
      </div>
    </header>
  )
}

