import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn('container mx-auto px-6 2xl:px-o', className)}>{children}</div>
  )
}

