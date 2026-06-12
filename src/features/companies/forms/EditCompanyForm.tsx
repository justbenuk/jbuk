'use client'
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { CompanyProps } from "../CompanyTypes";
import { CompanySchema } from "../CompanyValidationSchema";
import { EditCompanyInformation } from "../CompanyActions";


export default function EditCompanyForm({ company }: { company: CompanyProps }) {
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
    const response = await EditCompanyInformation(values, company.id)

    if (response.success) {
      toast.success('Company Updated')
    } else {
      toast.error('Failed to update company')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleAddForm)} id='edit-company' className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <Controller name="contactNumber" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Contact Number</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="emergencyContact" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Emergency Contact</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )} />
        <Controller name="address" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Address</FieldLabel>
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
        <div className="flex flex-row gap-10">
          <Controller name="long" control={form.control} render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Longitude</FieldLabel>
              <FieldContent>
                <Input {...field} />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </FieldContent>
            </Field>
          )} />
          <Controller name="lat" control={form.control} render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Latitude</FieldLabel>
              <FieldContent>
                <Input {...field} />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </FieldContent>
            </Field>
          )} />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <Button>
          Save
        </Button>
      </div>
    </form >
  )
}
