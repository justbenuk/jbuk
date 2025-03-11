import SiteNav from "@/components/header/sitenav";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ben Andrews | Freelance Web Developer",
  description: "Self-taught freelance web developer based in the midlands",
};

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <SiteNav />
      <main>
        {children}
      </main>
    </>
  );
}
