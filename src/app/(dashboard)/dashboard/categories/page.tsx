import ClientContainer from '@/components/shared/ClientContainer';
import ProjectCategoriesList from '@/features/categories/components/ProjectCategoriesList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories'
}

export default function CategoriesPage() {
  return (
    <ClientContainer>
      <ProjectCategoriesList />
    </ClientContainer>
  )
}

