import MainMenu from "../menus/MainMenu"
import MainLogo from "../shared/MainLogo"

export default function MainHeader() {
  return (
    <header className="py-4 px-6 flex flex-row items-center justify-between">
      <MainLogo />
      <div className="flex flex-row items-center gap-2">
        <MainMenu />
      </div>
    </header>
  )
}

