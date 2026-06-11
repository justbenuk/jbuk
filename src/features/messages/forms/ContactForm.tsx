'use client'
import { Button } from "@/components/ui/button"
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { SendIcon } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"
import { ContactFormSchema } from "../MessageValidationSchemas"
import { createMessage } from "../MessageActions"

export default function ContactForm() {

  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      domain: '',
      message: ''
    }
  })

  async function handleSendContactForm(values: z.infer<typeof ContactFormSchema>) {
    const { success, message } = await createMessage(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      form.reset()
    }
  }
  return (
    <form onSubmit={form.handleSubmit(handleSendContactForm)} className="grid gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Controller name="name" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="email" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Controller name="phoneNumber" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Phone Number</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="domain" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Domain</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
      </div>
      <Controller name="message" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Message</FieldLabel>
          <FieldContent>
            <Textarea {...field} />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )} />
      <div className="flex justify-end">
        <Button>
          <SendIcon />
          Send Message
        </Button>
      </div>
    </form>
  )
}

