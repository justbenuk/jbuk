import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { HomeIcon } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import AuthMenu from "./auth-menu";
import SiteMenu from "./site-menu";

export default async function DashboardSidebar() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect('/login')
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <Link href={'/'}>
            <HomeIcon />
            <span>Back to Site</span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SiteMenu />
      </SidebarContent>
      <SidebarFooter>
        <AuthMenu user={session.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

