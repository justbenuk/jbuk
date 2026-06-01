import type { Metadata } from 'next';
import MainContainer from "@/components/shared/MainContainer";
import LinerText from '@/components/shared/LinerText';

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'Some of the things I find interesting in the world of tech, security and web development'
};

export default function PostsPage() {
  return (
    <MainContainer className='w-full'>
      <div className='space-y-1'>
        <LinerText text='All Posts' />
        <p>Sometimes I&apos;m chilling on the internet and I come across something interesting. This is where I place it to remind myself and share with others that might find it interesting</p>
      </div>
    </MainContainer>
  )
}

