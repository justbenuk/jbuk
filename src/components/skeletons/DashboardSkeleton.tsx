import PageContainer from "../shared/PageContainer";
import TableSkeleton from "./TableSkeleton";
import TripleBoxSkeleton from "./TripleBoxSkeleton";

export default function DashboardSkeleton() {
  return (
    <PageContainer size="dashboard">
      <TripleBoxSkeleton length={4} />
      <TableSkeleton />
    </PageContainer>
  )
}

