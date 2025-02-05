"use client";
import { addContactMessage } from "@/actions/contact-form-actions";
import FormInput from "@/components/forms/form-input";
import FormTextarea from "@/components/forms/form-textarea";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import Form from "next/form";

const initialState = {
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(addContactMessage, initialState);
  return (
    <Form className="mt-4" action={formAction}>
      <FormInput name="name" type="text" placeholder="Name" />
      <FormInput name="email" type="email" placeholder="Email" />
      <FormInput name="phone" type="text" placeholder="Phone" />
      <FormTextarea name="message" placeholder="Message" />
      <Button variant="default" size="lg" className="mt-4" type="submit">
        Send Message
      </Button>
    </Form>
  );
}
