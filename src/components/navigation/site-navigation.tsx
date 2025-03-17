import SiteLogo from "../global/site-logo"
import AuthMenuList from "./auth-menu-list"
import SiteMenuList from "./site-menu-list"

export default function SiteNavigation() {
  return (
    <header className="flex flex-row items-center justify-between py-4 px-6 border-b">
      <SiteLogo />
      <SiteMenuList />
      <AuthMenuList />
    </header>
  )
}
