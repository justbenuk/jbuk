import Container from "@/components/shared/container";
import CreateContactForm from "@/forms/createContactForm";
import { Facebook, MailIcon, PhoneIcon, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Let's Talk",
  description: "If you have a project you would like me to work on. Please contact me to find out more"
}

export default function LetsTalkPage() {
  return (
    <Container className="mt-10">
      <div className="flex flex-col items-center justify-center min-h-[90dvh]">
        <div className="w-full grid lg:grid-cols-2 gap-10">
          <div className="space-y-2 pr-6">
            <h1 className="text-3xl font-semibold uppercase text-teal-500">Let&apos;s Talk</h1>
            <p>If you have any questions regarding a project I have worked on, or anything on my portfolio, Please contact me. I work on new or existing projects and can build any custom web application you may need</p>
            <p>Where possible all projects are hosted on Vercel for you try out, I also welcome any feedback you may have.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 space-y-4">
              <div className="space-y-4">
                <Link href={'/'} target="_blank" className="flex flex-row items-center gap-4"><span className="text-teal-500"><Facebook /></span>@justbenuk</Link>
                <Link href={'/'} target="_blank" className="flex flex-row items-center gap-4"><span className="text-teal-500"><Twitter /></span>@justbenuk</Link>
              </div>
              <div className="space-y-4">
                <Link href={'mailto:justbenuk@gmail.com'} target="_blank" className="flex flex-row items-center gap-4"><span className="text-teal-500"><MailIcon /></span>justbenuk@gmail.com</Link>
                <Link href={'tel:07916019809'} target="_blank" className="flex flex-row items-center gap-4"><span className="text-teal-500"><PhoneIcon /></span>07916 019 809</Link>
              </div>
            </div>
          </div>
          <CreateContactForm />
        </div>
      </div>
    </Container>
  )
}

