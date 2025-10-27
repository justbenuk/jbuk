import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { HomeIcon, Users2Icon } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UsersMenu from "./users-menu";
import Link from "next/link";
import AuthMenu from "./auth-menu";

export default async function DashboardSidebar() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect('/login')
  }
  const data = {
    user: session.user,
    users: [
      {
        title: 'Users',
        url: '/dashboard/users',
        icon: Users2Icon,
        items: [
          {
            title: 'All Users',
            url: '/dashboard/users'
          }
        ]
      }
    ]
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
        <UsersMenu userMenu={data.users} />
      </SidebarContent>
      <SidebarFooter>
        <AuthMenu user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

