import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import { ReactNode } from "react";
import Container from "@/components/shared/container";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Container className="w-full flex-1">
        <div className="flex flex-row justify-between mt-10">
          <main className="flex-1">{children}</main>
          <div>sidebar</div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
