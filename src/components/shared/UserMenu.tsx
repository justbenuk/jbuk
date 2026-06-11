'use client'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LineDotRightHorizontal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "@/actions/AuthActions";
import ErrorCard from "./ErrorCard";
import UserMenuSkeleton from "./UserMenuSkeleton";
import { UserProps } from "@/features/Authentication/AuthenticationTypes";
import UserSignOutForm from "@/features/Authentication/forms/UserSignOutForm";

export default function UserMenu() {
  const [user, setUser] = useState<UserProps>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()
  const { isMobile } = useSidebar()


  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchCurrentUser()

      if (response.success && response.data) {
        setLoading(false)
        setUser(response.data)
      } else {
        setError(response.message)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <UserMenuSkeleton />
  if (error) return <ErrorCard message={error} />

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg dark:grayscale">
                <AvatarImage src={user?.image as string} alt={user?.name} />
                <AvatarFallback className="rounded-lg">BA</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user?.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user?.email}
                </span>
              </div>
              <LineDotRightHorizontal />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.image as string} alt={user?.name} />
                  <AvatarFallback className="rounded-lg">BA</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href={'/client'}>Client</Link>
              </DropdownMenuItem>
              {user?.role === 'admin' && (
                <DropdownMenuItem asChild>
                  <Link href={'/dashboard'}>Dashboard</Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserSignOutForm />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu >
  )
}
