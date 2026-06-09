import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import ClientSidebar from "@/fearures/client/components/ClientSidebar";
import ClientSidebarHeader from "@/fearures/client/components/ClientSidebarHeader";
import { GlobalProps } from "@/types/global-types";

export default function layout({ children }: GlobalProps) {
  return (
    <SidebarProvider>
      <ClientSidebar />
      <SidebarInset>
        <ClientSidebarHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

