import MobileNavbar from "@/components/shared/navbar/mobile-navbar";
import ToggleMode from "@/components/shared/navbar/toggle-mode";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen">
      <MobileNavbar />
      <main>{children}</main>
      <ToggleMode />
    </div>
  );
}
