'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createNextSteps } from "../contact-actions"
import { toast } from "sonner"
import { createNextStepsSchema } from "../contact-validators"

export default function NextStepsForm() {

  const form = useForm<z.infer<typeof createNextStepsSchema>>({
    resolver: zodResolver(createNextStepsSchema),
    defaultValues: {
      name: '',
      email: '',
      type: '',
      budget: '',
      details: ''
    }
  })

  async function handleForm(values: z.infer<typeof createNextStepsSchema>) {
    const { success, message } = await createNextSteps(values)

    if (!success) {
      toast.warning(message)
    } else {
      toast.success(message)
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)} className="max-w-2xl mx-auto">
        <div className="grid gap-6">
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel>Name</FieldLabel>
                      <FieldContent>
                        <FormControl>
                          <Input {...field} className="py-6" />
                        </FormControl>
                        <FieldError>
                          <FormMessage />
                        </FieldError>
                      </FieldContent>
                    </Field>
                  </FormItem>
                )}
              />
            </Field>
            <Field>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel>Email</FieldLabel>
                      <FieldContent>
                        <FormControl>
                          <Input {...field} className="py-6" />
                        </FormControl>
                        <FieldError>
                          <FormMessage />
                        </FieldError>
                      </FieldContent>
                    </Field>
                  </FormItem>
                )}
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field>
              <FormField
                name="type"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel>Type Of Project</FieldLabel>
                      <FieldContent>
                        <FormControl>
                          <Input {...field} className="py-6" />
                        </FormControl>
                        <FieldError>
                          <FormMessage />
                        </FieldError>
                      </FieldContent>
                    </Field>
                  </FormItem>
                )}
              />
            </Field>
            <Field>
              <FormField
                name="budget"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel>Budget</FieldLabel>
                      <FieldContent>
                        <FormControl>
                          <Input {...field} className="py-6" />
                        </FormControl>
                        <FieldError>
                          <FormMessage />
                        </FieldError>
                      </FieldContent>
                    </Field>
                  </FormItem>
                )}
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="grid gap-3">
            <Field>
              <FormField
                name="details"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel>Additional Details</FieldLabel>
                      <FieldContent>
                        <FormControl>
                          <Textarea {...field} className="py-6" />
                        </FormControl>
                        <FieldError>
                          <FormMessage />
                        </FieldError>
                      </FieldContent>
                    </Field>
                  </FormItem>
                )}
              />
            </Field>
          </FieldGroup>
          <div className="flex flex-row items-center justify-center">
            <Button variant={'ghost'} className="py-6 px-12 border rounded-4xl border-teal-500 text-teal-500 font-semibold hover:bg-teal-500/10 hover:text-teal-500">Let&apos;s Start</Button>
          </div>
        </div>
      </form>
    </Form >
  )
}

