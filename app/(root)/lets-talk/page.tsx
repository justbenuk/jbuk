import Container from "@/components/shared/container";
import CreateContactForm from "@/forms/createContactForm";
import { MailIcon, PackageIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Let's Talk",
  description:
    "If you have a project you would like me to work on. Please contact me to find out more",
};

export default function LetsTalkPage() {
  return (
    <Container className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          <MailIcon className="size-10 mb-6 text-yellow-500" />
          <p className="font-semibold text-sm">Can I help you today?</p>
          <Link className="underline underline-offset-4 text-xs" href={'mailto:justbenuk@gmail.com'} target="_blank">Send me an email</Link>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <PhoneIcon className="size-10 mb-6 text-yellow-500" />
          <p className="font-semibold text-sm">Feel free to get in touch?</p>
          <Link className="underline underline-offset-4 text-xs" href={'tel:07916019809'} target="_blank">Give me a call today</Link>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <PackageIcon className="size-10 mb-6 text-yellow-500" />
          <p className="font-semibold text-sm">Ready to get started?</p>
          <Link className="underline underline-offset-4 text-xs" href={'tel:07916019809'} target="_blank">Lets get started</Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 py-10">
        <p className="text-sm font-semibold">Fill out the form and I will be in touch as soon as I can</p>
        <h1 className="text-3xl font-semibold text-yellow-500">How can I help you?</h1>
      </div>
      <div className="max-w-5xl mx-auto">
        <CreateContactForm />
      </div>
    </Container>
  );
}
