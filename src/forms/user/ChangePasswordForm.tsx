'use client'

import { changeUserPassword } from "@/actions/UsersActions"
import { Button } from "@/components/ui/button"
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ChangePasswordSchema } from "@/validaters/UserValidationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

export default function ChangePasswordForm() {
  const form = useForm({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  })

  async function handleChangePasswordForm(values: z.infer<typeof ChangePasswordSchema>) {
    const { success, message } = await changeUserPassword(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      form.reset()
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleChangePasswordForm)} id="change-password" className="grid gap-6">
      <div className="flex flex-row items-center justify-between gap-10">
        <Controller name="currentPassword" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Current Password</FieldLabel>
            <FieldContent>
              <Input {...field} type="password" />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
        />
        <Controller name="newPassword" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>New Password</FieldLabel>
            <FieldContent>
              <Input {...field} type="password" />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
        />
        <Controller name="confirmNewPassword" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Confirm New Password</FieldLabel>
            <FieldContent>
              <Input {...field} type="password" />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
        />
      </div>
      <div className="flex flex-row items-center justify-end">
        <Button form="change-password">Change</Button>
      </div>
    </form>
  )
}

