"use client"

import Link from "next/link";
import { Sidebar, SidebarHeader, SidebarMenuItem, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import UserMenu from "@/features/Authentication/companents/UserMenu";
import { FileQuestionIcon, HomeIcon, LayoutDashboardIcon, LockIcon, ProjectorIcon } from "lucide-react";

export default function ClientSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"}>
                <HomeIcon />
                <span>Back To Site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client'}>
                  <LayoutDashboardIcon />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client/change-password'}>
                  <LockIcon />
                  <span>Change Password</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client/projects'}>
                  <ProjectorIcon />
                  <span>Projects</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={'/client/faqs'}>
                  <FileQuestionIcon />
                  <span>FAQs</span>
                </Link>
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
