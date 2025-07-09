import SiteLogo from "../global/site-logo";
import DesktopMenu from "../menus/desktop-menu";
import MobileMenu from "../menus/mobiile-menu";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-4 border-b px-6">
      <SiteLogo />
      <div>
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  )
}

