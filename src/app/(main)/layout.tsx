import type { Metadata } from "next";
import { Lprops } from "@/types";

export const metadata: Metadata = {
  title: "Just Ben UK",
  description:
    "I am a freelance, fullstack web developer based in the midlands",
};

export default function RootLayout({ children }: Lprops) {
  return <>{children}</>;
}
