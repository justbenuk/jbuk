import NextStepsForm from '@/features/contant/forms/next-steps-form';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Next Steps'
};
export default function NextStepsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 2xl:px-0 space-y-10">
      <div className='flex flex-col items-center justify-center text-2xl md:text-3xl lg:text-5xl text-center'>
        <Image src={'/assets/me.png'} alt='profile picture' width={200} height={200} className='mb-10 rounded-full border-4 border-teal-500' />
        <h1>Do you have a project or Idea</h1>
        <h1>Ready to get started?</h1>
      </div>
      <div>
        <NextStepsForm />
      </div>
    </div>
  )
}

