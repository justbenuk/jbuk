import AdminSidebarHeader from "@/components/headers/AdminSidebarHeader";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { GlobalProps } from "@/types/global-types";

export default function layout({ children }: GlobalProps) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <AdminSidebarHeader />
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

