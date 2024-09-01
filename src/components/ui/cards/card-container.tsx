import { ReactNode } from "react";

interface CCProps {
  children: ReactNode;
}
export default function CardContainer({ children }: CCProps) {
  return (
    <div className="container mx-auto px-6 2xl:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}
