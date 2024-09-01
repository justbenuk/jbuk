import { ReactNode } from "react";

interface PCProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PCProps) {
  return <div className="container mx-auto px-6 xlpx-0">{children}</div>;
}
