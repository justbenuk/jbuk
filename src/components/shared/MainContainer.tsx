import { cn } from "@/lib/utils";
import { GlobalProps } from "@/types/global-types";

export default function MainContainer({ children, className }: GlobalProps) {
  return (
    <div className={cn('max-w-5xl mx-auto px-6 2xl:px-0', className)}>{children}</div>
  )
}

