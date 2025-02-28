import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import MainNavbar from "@/components/header/main-nav";

export const metadata: Metadata = {
  title: "Ben Andrews - Freelance Web Developer",
  description: "Based in the midlands, I am a freelamce web developer buil;ding the future, one line of code at a time",
};

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="antialiased bg-gray-200">
      <body className="flex flex-col justify-between min-h-screen">
        <MainNavbar />
        <main className="flex-grow">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
