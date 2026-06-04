import ClientSidebarHeader from "@/components/headers/ClientSidebarHeader";
import ClientSidebar from "@/components/sidebars/ClientSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { GlobalProps } from "@/types/global-types";

export default function layout({ children }: GlobalProps) {
  return (
    <SidebarProvider>
      <ClientSidebar />
      <SidebarInset>
        <ClientSidebarHeader />
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

