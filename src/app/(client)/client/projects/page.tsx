import ClientContainer from '@/components/shared/ClientContainer';
import DashTitle from '@/components/shared/DashTitle';
import ClientProjectList from '@/features/client/components/ClientProjectList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Projects'
};

export default function ProjectsPage() {
  return (
    <ClientContainer className='grid gap-6'>
      <DashTitle title='Your Projects' />
      <ClientProjectList />
    </ClientContainer>
  )
}

