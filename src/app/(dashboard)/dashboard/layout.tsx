import { ReactNode } from "react";
interface DLProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DLProps) {
  return (
    <div className="flex flex-row bg-base-100 min-h-screen">
      <div className="flex-1 mt-4">
        <main className="container mx-auto px-6">{children}</main>
      </div>
    </div>
  );
}
