import type { Metadata } from 'next';
import StatsSection from '@/features/dashboard/components/StatsSection';
import PageContainer from '@/components/shared/PageContainer';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function DashboardPage() {

  return (
    <PageContainer size='dashboard'>
      <StatsSection />
    </PageContainer>
  )
}

