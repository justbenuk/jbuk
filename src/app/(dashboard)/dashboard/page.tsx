import type { Metadata } from 'next';
import ClientContainer from "@/components/shared/ClientContainer";
import StatsSection from '@/features/dashboard/components/StatsSection';

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

