import UserMenu from "@/components/shared/UserMenu";
import { SidebarHeader, Sidebar, SidebarMenuItem, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
export default function DashboardSidebar() {

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
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuButton asChild>
              <Link href={'/dashboard'}>Dashboard</Link>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  )
}

