"use client"

import Link from "next/link";
import Image from "next/image";
import { Sidebar, SidebarHeader, SidebarMenuItem, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import UserMenu from "@/features/Authentication/companents/UserMenu";

export default function ClientSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="py-2">
            <Link href={'/'} className="flex flex-row items-center gap-4">
              <Image src={'/assets/me-nobg.png'} alt="profile" width={40} height={40} className="rounded-full border-2 border-primary" />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Just Ben UK</span>
                <span className="text-xs">Client Dashboard</span>
              </div>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client'}>Dashboard</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client/projects'}>Projects</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client/servers'}>Servers</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client/faqs'}>FAQ's</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  )
}
