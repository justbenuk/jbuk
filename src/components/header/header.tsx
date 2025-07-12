import Container from "../global/container";
import SiteLogo from "../global/site-logo";
import DesktopMenu from "../menus/desktop-menu";
import MobileMenu from "../menus/mobiile-menu";

export default function Header() {
  return (
    <header className="py-4 border-b">
      <Container className="flex flex-row justify-between items-center">
        <SiteLogo />
        <div>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}

