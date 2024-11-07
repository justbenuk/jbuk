import type { Metadata } from "next";
import "./globals.css";
import { Lprops } from "@/types";

export const metadata: Metadata = {
  title: "Just Ben UK",
  description: "I am a fullstack web developer based in the midlands",
};

export default function RootLayout({ children }: Lprops) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-300">
      <body>{children}</body>
    </html>
  );
}
