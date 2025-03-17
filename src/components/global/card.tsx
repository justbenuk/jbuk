import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div className={cn('border rounded-xl', className)}>{children}</div>
  )
}
