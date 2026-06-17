import PageContainer from "../shared/PageContainer";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function CategorySkeleton() {
  return (
    <PageContainer size="dashboard" >
      <Card>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Skeleton className="h-5 w-30" />
            <Skeleton className="h-5 w-1/2" />
          </div>
          <div className="grid gap-2">
            <Skeleton className="h-5 w-30" />
            <Skeleton className="h-48 w-1/2" />
          </div>
        </CardContent>
      </Card>
    </PageContainer>)
}

