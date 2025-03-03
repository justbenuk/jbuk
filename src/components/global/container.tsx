import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}
export default function Container({ children, className }: Props) {
  return (
    <div className={cn('max-w-7xl mx-auto px-6 lg:px-0', className)}>{children}</div>
  )
}
