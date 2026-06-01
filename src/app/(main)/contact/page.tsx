import type { Metadata } from 'next';
import LinerText from "@/components/shared/LinerText";
import MainContainer from "@/components/shared/MainContainer";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/forms/contact/ContactForm";
import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'If you have a project you would like me to work on. Contact me!'
};

export default function page() {
  return (
    <MainContainer className="w-full">
      <div className="grid griod-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <LinerText text="Contact" />
          <p>I&apos;m available to work on any project, so if you have anything you need help with. Let me know.</p>
          <div className="mt-6 flex flex-col gap-6">
            <Link href={'tel:07916019809'} className="flex flex-row items-center gap-4 font-semibold">
              <PhoneIcon className="text-primary" />
              <span>07916 019 809</span>
            </Link>
            <Link href={'mailto://justbenuk@pm.me'} className="flex flex-row items-center gap-4 font-semibold">
              <MailIcon className="text-primary" />
              <span>justbenuk@pm.me</span>
            </Link>
          </div>
        </div>
        <Card>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

    </MainContainer>
  )
}

