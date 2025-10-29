import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-muted">
      <Spinner className="size-10 text-teal-500" />
    </div>
  )
}

