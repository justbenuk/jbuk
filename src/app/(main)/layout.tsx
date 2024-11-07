import type { Metadata } from "next";
import { Lprops } from "@/types";
import NavigationBar from "@/components/navigation-bar";
import GlobalFooter from "@/components/global-footer";

export const metadata: Metadata = {
  title: "Just Ben UK",
  description:
    "I am a freelance, fullstack web developer based in the midlands",
};

export default function RootLayout({ children }: Lprops) {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <NavigationBar />
      {children}
      <GlobalFooter />
    </main>
  );
}
