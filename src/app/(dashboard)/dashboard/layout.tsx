"use client";
import { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard-sidebar";
import DashboardSidebarHeader from "@/components/dashboard-sidebar-header";
import { useState } from "react";
interface DLProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DLProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex flex-row bg-base-100 min-h-screen">
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 mt-4">
        <DashboardSidebarHeader
          onMenuButtonClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="container mx-auto px-6">{children}</main>
      </div>
    </div>
  );
}
