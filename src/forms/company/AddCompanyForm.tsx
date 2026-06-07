'use client'
import { AddCompanyInformationAction } from "@/actions/CompanyActions";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CompanySchema } from "@/validaters/CompanyValidationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export default function AddCompanyForm() {
  const form = useForm({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      name: '',
      email: '',
      contactNumber: '',
      emergencyContact: "",
      address: '',
      domain: '',
      long: '',
      lat: '',
    }
  })

  async function handleAddForm(values: z.infer<typeof CompanySchema>) {
    const { success, message } = await AddCompanyInformationAction(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleAddForm)}>
      <Controller name="name" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Name</FieldLabel>
          <FieldContent>
            <Input {...field} />
            {fieldState.error && <FieldError errors={[fieldState.error]} />};
          </FieldContent>
        </Field>
      )} />
      <Controller name="email" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldContent>
            <Input {...field} />
            {fieldState.error && <FieldError errors={[fieldState.error]} />};
          </FieldContent>
        </Field>
      )} />
      <Controller name="contactNumber" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Contact Number</FieldLabel>
          <FieldContent>
            <Input {...field} />
            {fieldState.error && <FieldError errors={[fieldState.error]} />};
          </FieldContent>
        </Field>
      )} />
      <Controller name="emergencyContact" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Emergency Contact</FieldLabel>
          <FieldContent>
            <Input {...field} />
            {fieldState.error && <FieldError errors={[fieldState.error]} />};
          </FieldContent>
        </Field>
      )} />
      <Controller name="address" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Address</FieldLabel>
          <FieldContent>
            <Input {...field} />
            {fieldState.error && <FieldError errors={[fieldState.error]} />};
          </FieldContent>
        </Field>
      )} />
      <Controller name="domain" control={form.control} render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>Domain</FieldLabel>
          <FieldContent>
            <Input {...field} />
            {fieldState.error && <FieldError errors={[fieldState.error]} />};
          </FieldContent>
        </Field>
      )} />
      <div className="flex flex-row gap-10">
        <Controller name="long" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Longitude</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />};
            </FieldContent>
          </Field>
        )} />
        <Controller name="lat" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Latitude</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.error && <FieldError errors={[fieldState.error]} />};
            </FieldContent>
          </Field>
        )} />
      </div>
      <div className="flex flex-row justify-end">
        <Button>Add</Button>
      </div>
    </form>
  )
}

