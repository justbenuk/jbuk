import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
  className?: string
}

export default function CardHeader({ children, className }: Props) {
  return (
    <div className={cn('', className)}>{children}</div>
  )
}
