import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Users2Icon } from "lucide-react"
import Link from "next/link"


export default function SiteMenu() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Site</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href='/dashboard/users'>
              <Users2Icon />
              Users
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

