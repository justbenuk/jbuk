import { Skeleton } from "../ui/skeleton";

export default function ClientProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
    </div>
  )
}

