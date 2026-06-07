import { GlobalProps } from "@/types/global-types";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });


export const metadata: Metadata = {
  title: {
    template: '%s | Just Ben UK',
    default: 'Just ben UK'
  },
  description: 'Freelance, solo web developer based in the midlands'
}

export default function RootLayout({ children }: GlobalProps) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
