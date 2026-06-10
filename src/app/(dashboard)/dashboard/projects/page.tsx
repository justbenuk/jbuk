import type { Metadata } from 'next';
import ClientContainer from "@/components/shared/ClientContainer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <ClientContainer>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
          <div>
            <CardTitle>Projects</CardTitle>
            <CardDescription>All projects</CardDescription>
          </div>
          <Button asChild>
            <Link href={'/dashboard/projects/new'}>
              <PlusIcon />
              <span>New Post</span>
            </Link>
          </Button>
        </CardHeader>
      </Card>
    </ClientContainer>
  )
}

