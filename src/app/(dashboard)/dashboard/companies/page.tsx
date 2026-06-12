import ClientContainer from '@/components/shared/ClientContainer';
import CompanyList from '@/features/companies/components/CompanyList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Companies'
}

export default function CompaniesPage() {
  return (
    <ClientContainer>
      <CompanyList />
    </ClientContainer>
  )
}

