import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
