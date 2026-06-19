import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageContainer from '@/components/shared/PageContainer';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions'
};

export default function FaqsPage() {
  return (
    <PageContainer size='dashboard'>
      <Card className='pt-0'>
        <CardHeader className='bg-primary text-muted py-4'>
          <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          Sometimes you may find you have a question that needs an answer now. I will add all the frequently asked questions here. If you don&apos;t find what you are looking for, drop me a message, email WhatsApp or call.
        </CardContent>
      </Card>
    </PageContainer>
  )
}
