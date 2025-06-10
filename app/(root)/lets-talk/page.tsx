import Container from "@/components/shared/container";
import CreateContactForm from "@/forms/createContactForm";
import { Facebook, MailIcon, PhoneIcon, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Let's Talk",
  description:
    "If you have a project you would like me to work on. Please contact me to find out more",
};

export default function LetsTalkPage() {
  return (
    <Container className="mt-10">
      <div>boces</div>
      <div>
        <CreateContactForm />
      </div>
    </Container>
  );
}
