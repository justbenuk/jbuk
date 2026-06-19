import { Skeleton } from "../ui/skeleton";

export default function FeaturedCarouselSkeleton() {
  return (
    <div className="grid gap-5">
      <Skeleton className="min-h-[240px] rounded-[2rem] sm:min-h-[320px] lg:min-h-[360px]" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Skeleton className="h-16 w-full rounded-xl sm:h-18" />
        <Skeleton className="h-16 w-full rounded-xl sm:h-18" />
        <Skeleton className="h-16 w-full rounded-xl sm:h-18" />
        <Skeleton className="h-16 w-full rounded-xl sm:h-18" />
        <Skeleton className="h-16 w-full rounded-xl sm:h-18" />
        <Skeleton className="h-16 w-full rounded-xl sm:h-18" />
      </div>
    </div>
  );
}
