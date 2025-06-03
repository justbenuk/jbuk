import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
