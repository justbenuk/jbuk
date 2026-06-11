import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import ClientSidebar from "@/features/client/components/ClientSidebar";
import ClientSidebarHeader from "@/features/client/components/ClientSidebarHeader";
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
