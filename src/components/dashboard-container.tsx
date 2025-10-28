import { cn } from "@/lib/utils";
import { RootProps } from "@/types";

interface ContainerProps extends RootProps {
  className?: string
}

export default function DashbordContainer({ children, className }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-6', className)}>{children}</div>
  )
}

