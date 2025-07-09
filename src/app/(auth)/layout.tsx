import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <main>{children}</main>
    </div>
  );
}
