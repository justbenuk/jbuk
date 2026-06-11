import ClientContainer from "../shared/ClientContainer";
import TableSkeleton from "./TableSkeleton";
import TripleBoxSkeleton from "./TripleBoxSkeleton";

export default function DashboardSkeleton() {
  return (
    <ClientContainer className="grid gap-6">
      <TripleBoxSkeleton length={4} />
      <TableSkeleton />
    </ClientContainer>
  )
}

