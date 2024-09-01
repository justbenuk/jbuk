import { ReactNode } from "react";
import MainNavbar from "@/components/navigation/main-navbar";
import Footer from "@/components/footer/footer";

interface RProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RProps) {
  return (
    <>
      <MainNavbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
