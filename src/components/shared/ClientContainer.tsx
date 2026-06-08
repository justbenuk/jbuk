import { cn } from "@/lib/utils";
import { GlobalProps } from "@/types/global-types";

export default function ClientContainer({ children, className }: GlobalProps) {
  return (
    <div className={cn('container mx-auto px-6 2xl:px-0 py-10', className)}>{children}</div>
  )
}

