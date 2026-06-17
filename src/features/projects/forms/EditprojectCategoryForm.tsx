"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { AddProjectCategorySchema } from "../ProjectValidationSchema";
import { EditProjectCategoryById } from "@/features/categories/CategoryActions";
import { ProjectCategory } from "@prisma/client";

export default function EditProjectCategoryForm({
  category,
}: {
  category: ProjectCategory;
}) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(AddProjectCategorySchema),
    defaultValues: {
      name: category.name,
      description: category.description || null || "",
    },
  });

  async function handleUpdateProjectCategory(
    values: z.infer<typeof AddProjectCategorySchema>,
  ) {
    const { success, message } = await EditProjectCategoryById(
      category.id,
      values,
    );

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      router.push("/dashboard/categories");
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleUpdateProjectCategory)}
      className="grid gap-6"
    >
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Category Name</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="description"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Category Description</FieldLabel>
            <FieldContent>
              <Textarea {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <div className="flex flex-row items-center justify-end">
        <Button>Save</Button>
      </div>
    </form>
  );
}
