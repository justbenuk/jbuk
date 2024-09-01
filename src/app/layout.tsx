import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/utils/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Just Ben UK | Freelance Developer",
  description:
    "I am a web developer based in the midlands building custom web applications for fun",
};

interface RProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RProps) {
  const session = await auth();
  return (
    <html lang="en" data-theme="light">
      <SessionProvider session={session}>
        <body className={poppins.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
