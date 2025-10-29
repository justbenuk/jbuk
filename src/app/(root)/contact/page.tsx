import ContactForm from '@/features/contant/forms/contact-form';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Say Hello'
};
export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 2xl:px-0 space-y-10">
      <div className='flex flex-col items-center justify-center text-5xl'>
        <h1>Thanks for taking the time to reach out.</h1>
        <h1>How can I help you today?</h1>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

