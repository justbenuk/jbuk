import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: {
    template: '%s - Just Ben UK - Freelance Web Developer',
    default: 'Just ben UK - Freelance Web Developer'
  },
  description: "I create custom web applications using NextJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
