"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { CompanyProps } from "../CompanyTypes";
import { CompanySchema } from "../CompanyValidationSchema";
import { EditCompanyInformation } from "../CompanyActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadButton } from "@/lib/uploadthing";
import { imageSrc } from "@/lib/utils";
import Image from "next/image";

export default function EditCompanyForm({
  company,
}: {
  company: CompanyProps;
}) {
  const form = useForm({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      name: company?.name || "",
      email: company?.email || "",
      contactNumber: company?.contactNumber,
      emergencyContact: company?.emergencyContact,
      address: company?.address || "",
      domain: company?.domain || "",
      long: company?.long || "",
      lat: company?.lat || "",
      image: company?.image || "",
    },
  });

  async function handleAddForm(values: z.infer<typeof CompanySchema>) {
    const response = await EditCompanyInformation(values, company.id);

    if (response.success) {
      toast.success("Company Updated");
    } else {
      toast.error("Failed to update company");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleAddForm)} id="edit-company">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Add Company</CardTitle>
              <CardDescription>Add your company details</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
              <Controller
                name="contactNumber"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Contact Number</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
              <Controller
                name="emergencyContact"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Emergency Contact</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
              <Controller
                name="address"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Address</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Image</CardTitle>
              <CardDescription>Upload your company image</CardDescription>
            </CardHeader>
            <CardContent>
              <Controller
                name="image"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Image</FieldLabel>
                    <FieldContent>
                      {field.value ? (
                        <Image
                          src={imageSrc(field.value)}
                          alt={company.name}
                          width={400}
                          height={240}
                          className="h-40 w-full rounded-md border object-cover"
                        />
                      ) : null}
                      <Input type="hidden" {...field} />
                      <UploadButton
                        endpoint="CompanyPictureUploader"
                        input={{ companyId: company.id }}
                        appearance={{
                          container: "w-full",
                          button:
                            "h-10 w-full rounded-md border bg-primary px-6 text-primary-foreground dark:bg-primary",
                          allowedContent: "text-muted-foreground text-xs",
                        }}
                        content={{
                          button({ ready, isUploading }) {
                            if (!ready) return "Preparing...";
                            if (isUploading) return "Uploading...";
                            return field.value
                              ? "Replace Image"
                              : "Upload Image";
                          },
                        }}
                        onClientUploadComplete={(res) => {
                          const image = res[0]?.serverData?.url;

                          if (!image) {
                            toast.error("Failed to upload image");
                            return;
                          }

                          field.onChange(image);
                          toast.success("Company image updated");
                        }}
                        onUploadError={(error: Error) => {
                          console.error(error);
                          toast.error("Failed to upload image");
                        }}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Map Location</CardTitle>
              <CardDescription>
                Location of the office. This is more for my nosiness then any
                thing else{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Controller
                name="long"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Longitude</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
              <Controller
                name="lat"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Latitude</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Domain</CardTitle>
            </CardHeader>
            <CardContent>
              <Controller
                name="domain"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Domain</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
            </CardContent>
          </Card>
          <Button>Save</Button>
        </div>
      </div>
    </form>
  );
}
