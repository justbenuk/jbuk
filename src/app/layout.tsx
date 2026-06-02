import { GlobalProps } from "@/types/global-types";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const themeScript = `
  try {
    const theme = localStorage.getItem("theme") || "dark";
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch (_) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }
`;

export const metadata: Metadata = {
  title: {
    template: '%s | Just Ben UK',
    default: 'Just ben UK'
  },
  description: 'Freelance, solo web developer based in the midlands'
}

export default function RootLayout({ children }: GlobalProps) {
  return (
    <html lang="en" className={cn("dark font-sans", inter.variable)} style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Script id="theme-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
