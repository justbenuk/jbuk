import { fetchCurrentUser } from "@/actions/AuthActions";
import UserMenu from "../shared/UserMenu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuItem } from "../ui/sidebar";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AdminSiteMenu from "../menus/AdminSiteMenu";

export default async function AdminSidebar() {
  const user = await fetchCurrentUser()

  if (!user) redirect('/unauthrised')

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenuItem className="py-2">
          <Link href={'/'} className="flex flex-row items-center gap-4">
            <Image src={'/assets/me-nobg.png'} alt="profile" width={40} height={40} className="rounded-full border-2 border-primary" />
            <div className="flex flex-col justify-center">
              <span className="font-semibold">Just Ben UK</span>
              <span className="text-xs">Admin Dashboard</span>
            </div>
          </Link>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <AdminSiteMenu />
      </SidebarContent>
      <SidebarFooter>
        <UserMenu user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}

