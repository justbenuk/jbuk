import MainUserMenu from "./MainUserMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./shared/ThemeToggle";

export default function SecondMenu() {
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <ThemeToggle />
      <MainUserMenu />
      <div className="lg:hidden mt-2">
        <MobileMenu />
      </div>
    </div>
  );
}
