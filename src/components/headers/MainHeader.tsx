import MainMenu from "../menus/MainMenu"
import MainLogo from "../shared/MainLogo"
import ThemeSwitcher from "../shared/ThemeSwitcher"

export default function MainHeader() {
  return (
    <header className="py-4 px-6 flex flex-row items-center justify-between">
      <MainLogo />
      <div className="flex flex-row items-center gap-2">
        <ThemeSwitcher />
        <MainMenu />
      </div>
    </header>
  )
}

