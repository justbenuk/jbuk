import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
  className?: string
}

export default function PageContainer({ className, children }: Props) {
  return (
    <div className={cn('container mx-auto px-6 2xl:px-0', className)}>{children}</div>
  )
}
