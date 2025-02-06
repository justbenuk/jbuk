import SiteFooter from "@/components/global/site-footer";
import type { Metadata } from "next";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Just Ben UK",
  description: "Freelance Web Developer",
};
type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header>Header</header>
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
