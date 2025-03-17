import Footer from "@/components/footer/footer";
import SiteNavigation from "@/components/navigation/site-navigation";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ben Andrews",
  description: "Freelance Web Developer",
};

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <SiteNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
