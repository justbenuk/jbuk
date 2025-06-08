import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import CustomToastContainer from "@/components/shared/custom-toast-container";


export const metadata: Metadata = {
  title: {
    template: '%s | Just Ben UK',
    default: 'Just Ben UK'
  },
  description: "I am a freelance web developer from Tamworth. I build custom Web applications using NextJs",
};

type MainLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="min-h-screen">
      <body className="min-h-screen">
        <ThemeProvider defaultTheme="dark" disableTransitionOnChange={true} attribute={'class'}>
          {children}
          <CustomToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
