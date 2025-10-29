import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-screen">
      <Spinner className="size-6 text-teal-500" />
    </div>
  )
}

