import Link from "next/link";
import UserMenu from "../shared/UserMenu";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter, SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "../ui/sidebar";
import { fetchCurrentUser } from "@/actions/AuthActions";
import Image from "next/image";

export default async function ClientSidebar() {

  const user = await fetchCurrentUser()

  if (!user) return null

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenuItem className="py-2">
          <Link href={'/'} className="flex flex-row items-center gap-4">
            <Image src={'/assets/me-nobg.png'} alt="profile" width={40} height={40} className="rounded-full border-2 border-primary" />
            <div className="flex flex-col justify-center">
              <span className="font-semibold">Just Ben UK</span>
              <span className="text-xs">Client Dashboard</span>
            </div>
          </Link>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
          <SidebarGroup>
              <SidebarMenu>
                  <SidebarMenuButton asChild>
                      <Link href={'/client'}>Dashboard</Link>
                  </SidebarMenuButton>
              </SidebarMenu>
          </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserMenu user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}

