import type { Metadata } from 'next';
import ClientContainer from "@/components/shared/ClientContainer";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions'
};

export default function FaqsPage() {
  return (
    <ClientContainer className='grid gap-6'>
      <Card className='pt-0'>
        <CardHeader className='bg-primary text-muted py-4'>
          <CardTitle>FAQ's</CardTitle>
        </CardHeader>
        <CardContent>
          Sometimes you may find you have a question that needs an answer now. I will add all the frequently asked questions here. If you don&apos;t fond what your looking for, drop me a message, email WhatsApp or call
        </CardContent>
      </Card>
    </ClientContainer>
  )
}

