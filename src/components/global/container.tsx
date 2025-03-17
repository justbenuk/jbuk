import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  return (
    <div className={cn('mx-auto max-w-7xl px-6 2xl:px-0', className)}>{children}</div>
  )
}
