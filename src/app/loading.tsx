
import { Wave } from "@/components/loading-ui/wave";

export default function loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90dvh]">
      <Wave className="h-12 w-24 text-primary" />
    </div>
  )
}

