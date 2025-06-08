'use client'
import { InsertContactFormAction } from "@/actions/contact-actions"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { insertContactFormSchema } from "@/lib/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from 'zod'
export default function CreateContactForm() {

  const router = useRouter()

  const form = useForm<z.infer<typeof insertContactFormSchema>>({
    resolver: zodResolver(insertContactFormSchema),
    defaultValues: {
      name: '',
      contactNumber: '',
      domain: '',
      email: '',
      message: ''
    }
  })

  async function submitForm(values: z.infer<typeof insertContactFormSchema>) {
    const response = await InsertContactFormAction(values)

    if (!response.success) {
      toast.error(response.message)
    }
    toast.success(response.message)
    router.push('/')
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="flex flex-col space-y-4 w-full border shadow-xl p-8 rounded-2xl bg-white">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your name" className="py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your email" className="py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name='contactNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>contact Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your number (Optional)" className="py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name='domain'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domain</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your domain (Optional)" className="py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Enter your message" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button className="bg-teal-500" size={'lg'}>Send message</Button>
        </div>
      </form>
    </Form>
  )
}

