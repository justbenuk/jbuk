import { Skeleton } from "../ui/skeleton";

export default function UserMenuSkeleton() {
  return (
    <div className="w-full space-y-4 px-6">
      <div className="flex flex-row gap-4 items-center justify-between">
        <div>
          <Skeleton className="h-15 w-15 rounded-full" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-30 h-4" />
          <Skeleton className="w-30 h-4" />
        </div>
      </div>
    </div>
  )
}

