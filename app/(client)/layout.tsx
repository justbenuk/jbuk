import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
