import { ReactNode } from "react";
import AdminUser from "@/components/security/admin-user";
interface RProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RProps) {
  return (
    <AdminUser>
      <div>{children}</div>
    </AdminUser>
  );
}
