import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "text" | "form" | "dashboard" | "full";
}

const containerSizes = {
  text: "max-w-3xl",
  form: "max-w-5xl",
  dashboard: "max-w-7xl",
  full: "max-w-none",
};

export default function PageContainer({
  children,
  className,
  size = "dashboard",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto px-6 2xl:px-0",
        containerSizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
