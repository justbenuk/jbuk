"use client";
import ErrorCard from "@/components/shared/ErrorCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AddProjectSchema } from "../ProjectValidationSchema";
import { CompanyProps } from "@/features/client/ClientTypes";
import AddProjectSkeleton from "@/components/skeletons/AddProjectSkeleton";
import { CategoryProps } from "@/features/categories/CategoryValidationSchema";
import { AddProject } from "../ProjectActions";
import { fetchAllProjectCategories } from "@/features/categories/CategoryActions";
import { fetchAllCompanies } from "@/features/companies/CompanyActions";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import Editor from "@/components/Editor/Editor";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function AddProjectForm() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategorys] = useState<CategoryProps[]>();
  const [companies, setCompanies] = useState<CompanyProps[]>();
  const [error, setError] = useState<string | null>();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(AddProjectSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      image: "",
      content: "",
      companyId: "",
      categoryId: "",
      published: false,
      featured: false,
    },
  });

  async function handleAddProject(values: z.infer<typeof AddProjectSchema>) {
    const { success, message } = await AddProject(values);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      router.push("/dashboard/projects");
    }
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [categories, companies] = await Promise.all([
        fetchAllProjectCategories(),
        fetchAllCompanies(),
      ]);

      if (
        categories.success &&
        categories.data &&
        companies.success &&
        companies.data
      ) {
        setCategorys(categories.data);
        setCompanies(companies.data);
      } else {
        setError("Failed to fetch required data");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (error) return <ErrorCard message={error} />;
  if (loading) return <AddProjectSkeleton />;

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-8 gap-10"
      onSubmit={form.handleSubmit(handleAddProject)}
    >
      <div className="col-span-1 lg:col-span-5 space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
            <CardDescription>Add your contact</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Title</FieldLabel>
                  <FieldContent>
                    <Input {...field} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              name="excerpt"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Excerpt</FieldLabel>
                  <FieldContent>
                    <Textarea {...field} className="h-30" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Content</FieldLabel>
                  <FieldContent>
                    <Editor
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
          </CardContent>
        </Card>
        <div className="flex flex-row items-center justify-end">
          <Button>Save</Button>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Featured Image</CardTitle>
            <CardDescription>Add featured image</CardDescription>
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
                        src={field.value}
                        alt="Company image"
                        width={400}
                        height={240}
                        className="h-40 w-full rounded-md border object-cover"
                      />
                    ) : null}
                    <Input type="hidden" {...field} />
                    <UploadButton
                      endpoint="NewCompanyPictureUploader"
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
                          return field.value ? "Replace Image" : "Upload Image";
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
            <CardTitle>Category</CardTitle>
            <CardDescription>Add project to category</CardDescription>
          </CardHeader>
          <CardContent>
            <Controller
              name="categoryId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Category</FieldLabel>
                  <FieldContent>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={"Select Category"} />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        {categories?.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
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
            <CardTitle>Company</CardTitle>
            <CardDescription>Add project a company</CardDescription>
          </CardHeader>
          <CardContent>
            <Controller
              name="companyId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Company</FieldLabel>
                  <FieldContent>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={"Select Company"} />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        {companies?.map((company) => (
                          <SelectItem key={company.id} value={company.id}>
                            {company.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
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
            <CardTitle>Feature & Publish</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between gap-10">
            <Controller
              name="featured"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Feature</FieldLabel>
                  <FieldContent>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              name="published"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Published</FieldLabel>
                  <FieldContent>
                    <FieldContent>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
