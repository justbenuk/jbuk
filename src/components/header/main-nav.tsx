import DesktopMenuItems from "./desktop-menu-items";
import MainLogo from "./main-logo";
import ResponsiveMenuItems from "./responsive-menu-items";

export default function MainNavbar() {
  return (
    <header className="flex flex-row items-center justify-between px-6 py-4 border-b">
      <MainLogo />
      <div className="hidden md:flex">
        <DesktopMenuItems />
      </div>
      <div className="md:hidden">
        <ResponsiveMenuItems />
      </div>
    </header>
  )
}
