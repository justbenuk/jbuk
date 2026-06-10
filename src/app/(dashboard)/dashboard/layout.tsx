import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { GlobalProps } from "@/types/global-types";
import DashboardSidebar from '@/fearures/dashboard/components/DashboardSidebar';
import DashboardSidebarHeader from '@/fearures/dashboard/components/DashbordSidebarHeader';


export default function layout({ children }: GlobalProps) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardSidebarHeader />
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

