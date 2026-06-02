'use client'

import { RegisterUserAction } from "@/actions/AuthActions"
import { Button } from "@/components/ui/button"
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RegisterUserSchema } from "@/validaters/AuthValidationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

export default function RegisterUserForm() {

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  async function handleRegisterUser(values: z.infer<typeof RegisterUserSchema>) {
    const { success, message } = await RegisterUserAction(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      router.push('/client')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleRegisterUser)} className="grid gap-6">
      <Controller name="name" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Name</FieldLabel>
          <FieldContent>
            <Input {...field} placeholder="Jon Doe" />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )}
      />
      <Controller name="email" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Name</FieldLabel>
          <FieldContent>
            <Input {...field} placeholder="jdoe@example.com" />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )}
      />
      <Controller name="password" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Password</FieldLabel>
          <FieldContent>
            <Input {...field} type="password" />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )}
      />
      <Controller name="confirmPassword" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Change password</FieldLabel>
          <FieldContent>
            <Input {...field} type="password" />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )}
      />
      <Button>Register</Button>
    </form>
  )
}

