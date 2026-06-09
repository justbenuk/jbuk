import type { Metadata } from 'next';
import StatsSection from "@/components/pages/Dashboard/StatsSection";
import ClientContainer from "@/components/shared/ClientContainer";

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function DashboardPage() {

  return (
    <ClientContainer>
      <StatsSection />
    </ClientContainer>
  )
}

