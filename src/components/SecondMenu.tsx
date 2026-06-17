import MainUserMenu from "./MainUserMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./shared/ThemeToggle";

export default function SecondMenu() {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <ThemeToggle />
      <MainUserMenu />
      <MobileMenu />
    </div>
  );
}
