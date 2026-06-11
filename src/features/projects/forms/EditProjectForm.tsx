'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import z from "zod";
import { useRouter } from "next/navigation";
import { AddProjectSchema } from "../ProjectValidationSchema";
import { fetchAllCategories } from "../ProjectActions";
import { CategoryProps } from "@/features/GlobalTypes";
import { CompanyProps } from "@/features/client/ClientTypes";
import { ProjectProps } from "../ProjectTypes";
import { fetchAllCompanies } from "@/features/client/ClientActions";


export default function EditProjectForm({ project }: { project: ProjectProps }) {

  const [categories, setCategorys] = useState<CategoryProps[]>()
  const [companies, setCompanies] = useState<CompanyProps[]>()
  const [error, setError] = useState<string | null>()
  const router = useRouter()
  const form = useForm<z.input<typeof AddProjectSchema>, unknown, z.output<typeof AddProjectSchema>>({
    resolver: zodResolver(AddProjectSchema),
    defaultValues: {
      title: project.title,
      excerpt: project.excerpt,
      image: project.image,
      content: project.content,
      companyId: project.companyId || '',
      categoryId: project.projectCategoryId,
      published: project.published,
      featured: project.featured
    }
  })

  async function handleAddProject(values: z.output<typeof AddProjectSchema>) {
    console.log(values)
  }

  useEffect(() => {
    async function loadData() {
      const [categories, companies] = await Promise.all([
        fetchAllCategories(),
        fetchAllCompanies()
      ])

      if ((categories.success && categories.data) && (companies.success && companies.data)) {
        setCategorys(categories.data)
        setCompanies(companies.data)
      } else {
        setError('Failed to fetch required data')
      }
    }
    loadData()
  }, [])


  return (
    <form className="grid grid-cols-1 lg:grid-cols-8 gap-10" onSubmit={form.handleSubmit(handleAddProject)}>
      <div className="col-span-1 lg:col-span-5 space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
            <CardDescription>Add your contact</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <Controller name="title" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Title</FieldLabel>
                <FieldContent>
                  <Input {...field} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />
            <Controller name="excerpt" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Excerpt</FieldLabel>
                <FieldContent>
                  <Textarea {...field} className="h-30" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />
            <Controller name="content" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Content</FieldLabel>
                <FieldContent>
                  <Textarea {...field} className="h-60" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />
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
            <Controller name="image" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Image</FieldLabel>
                <FieldContent>
                  <Input {...field} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Category</CardTitle>
            <CardDescription>Add project to category</CardDescription>
          </CardHeader>
          <CardContent>
            <Controller name="categoryId" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Category</FieldLabel>
                <FieldContent>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={'Select Category'} />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      {categories?.map((category) => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />

          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Company</CardTitle>
            <CardDescription>Add project a company</CardDescription>
          </CardHeader>
          <CardContent>
            <Controller name="companyId" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Company</FieldLabel>
                <FieldContent>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={'Select Company'} />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      {companies?.map((company) => (
                        <SelectItem key={company.id} value={company.id}>{company.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />

          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature & Publish</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between gap-10">
            <Controller name="featured" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Feature</FieldLabel>
                <FieldContent>
                  <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />
            <Controller name="published" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Published</FieldLabel>
                <FieldContent>
                  <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )} />

          </CardContent>
        </Card>
      </div>
    </form>
  )
}
