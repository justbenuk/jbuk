import { Skeleton } from "../ui/skeleton";

export default function TripleBocSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3 w-full">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border border-muted bg-card p-6 shadow-sm space-y-3"
        >
          {/* Top Row: Title + Icon Placeholder */}
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-25" /> {/* Box Title */}
            <Skeleton className="h-4 w-4 rounded-sm" /> {/* Small Metric Icon */}
          </div>

          {/* Main Large Metric Value */}
          <div className="space-y-2">
            <Skeleton className="h-8 w-25" /> {/* e.g., "$45,231.89" */}
            <Skeleton className="h-3 w-40" /> {/* e.g., "+20.1% from last month" */}
          </div>
        </div>
      ))}
    </div>)
}

