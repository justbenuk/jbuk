import AuthMenu from "../auth/auth-menu";
import Logo from "../logo";
import MainMenuList from "../navbar/main-menu-list";
import MobileNavbar from "../navbar/mobile-navbar";
import ToggleMode from "../navbar/toggle-mode";

export default function Header() {
  return (
    <header className="border-b py-4 px-6">
      <div className="flex justify-between items-center">
        <Logo />
        <MainMenuList />
        <div className="flex lg:flex-1 lg:justify-end items-center space-x-2">
          <ToggleMode />
          <AuthMenu />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
