import PageContainer from '@/components/shared/PageContainer';
import ClientProjectList from '@/features/client/components/ClientProjectList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Projects'
};

export default function ProjectsPage() {
  return (
    <PageContainer size='dashboard'>
      <ClientProjectList />
    </PageContainer>
  )
}

