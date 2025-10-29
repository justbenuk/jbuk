import { RootProps } from "@/types";

export default function RootLayout({ children }: RootProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
