'use client'
import { EditCompanyInformationAction } from "@/actions/CompanyActions";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CompanyProps } from "@/types/company-types";
import { CompanySchema } from "@/validaters/CompanyValidationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";


export default function EditCompanyForm({ company }: { company: CompanyProps | null | undefined }) {
  const [edit, setEdit] = useState(true)
  const form = useForm({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      name: company?.name || '',
      email: company?.email || '',
      contactNumber: company?.contactNumber,
      emergencyContact: company?.emergencyContact,
      address: company?.address || '',
      domain: company?.domain || '',
      long: company?.long || '',
      lat: company?.lat || '',
    }
  })

  async function handleAddForm(values: z.infer<typeof CompanySchema>) {
    const { success, message } = await EditCompanyInformationAction(values, company?.id as string)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      setEdit(true)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleAddForm)} id='edit-company' className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Controller name="name" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldContent>
              <Input {...field} disabled={edit} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="email" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldContent>
              <Input {...field} disabled={edit} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="contactNumber" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Contact Number</FieldLabel>
            <FieldContent>
              <Input {...field} disabled={edit} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="emergencyContact" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Emergency Contact</FieldLabel>
            <FieldContent>
              <Input {...field} disabled={edit} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="address" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Address</FieldLabel>
            <FieldContent>
              <Input {...field} disabled={edit} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="domain" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Domain</FieldLabel>
            <FieldContent>
              <Input {...field} disabled={edit} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <div className="flex flex-row gap-10">
          <Controller name="long" control={form.control} render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Longitude</FieldLabel>
              <FieldContent>
                <Input {...field} disabled={edit} />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </FieldContent>
            </Field>
          )} />
          <Controller name="lat" control={form.control} render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Latitude</FieldLabel>
              <FieldContent>
                <Input {...field} disabled={edit} />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </FieldContent>
            </Field>
          )} />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <Button
          type="button"
          variant={'secondary'}
          onClick={() => setEdit(true)}
          disabled={edit}
        >
          Cancel
        </Button>

        <Button
          type={edit ? 'button' : 'submit'}
          onClick={(event) => {
            if (edit) {
              event.preventDefault()
              setEdit(false)
            }
          }}
        >
          {edit ? 'Edit' : 'Save'}
        </Button>
      </div>
    </form >
  )
}
