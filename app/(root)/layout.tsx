import Header from "@/components/shared/header/header";
import ToggleMode from "@/components/shared/navbar/toggle-mode";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <ToggleMode />
    </div>
  );
}
