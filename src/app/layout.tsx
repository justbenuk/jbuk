import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: '%s | Just Ben',
    default: 'Just Ben'
  },
  description: "Freelance Web Developer",
};

type LayoutProps = {
  children: ReactNode
}


export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
