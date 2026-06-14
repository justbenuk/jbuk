"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AddServerSchema } from "../ServerValadationSchema";
import { useEffect, useState } from "react";
import { CompanyProps } from "@/features/companies/CompanyTypes";
import { ProjectProps } from "@/features/projects/ProjectTypes";
import { fetchAllCompanies } from "@/features/companies/CompanyActions";
import { fetchAllProjects } from "@/features/projects/ProjectActions";
import AddProjectSkeleton from "@/components/skeletons/AddProjectSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import z from "zod";
import { AddServer } from "../ServerActions";
import { toast } from "sonner";

export function AddServerForm() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [error, setError] = useState<string | null>();

  const form = useForm({
    resolver: zodResolver(AddServerSchema),
    defaultValues: {
      provider: "",
      providerUrl: "",
      ipAddress: "",
    },
  });

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [companies, projects] = await Promise.all([
        fetchAllCompanies(),
        fetchAllProjects(),
      ]);

      if (
        companies.success &&
        companies.data &&
        projects.success &&
        projects.projects
      ) {
        setCompanies(companies.data);
        setProjects(projects.projects);
      } else {
        setError("Failed to load data");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  async function handleAddServer(values: z.infer<typeof AddServerSchema>) {
    const response = await AddServer(values);

    if (response.success) {
      toast.success("Server Added");
    } else {
      toast.error("Failed to add server");
    }
  }
  console.log(projects);
  if (loading) return <AddProjectSkeleton />;
  if (error) return <ErrorCard message="Failed to fetch data" />;

  return (
    <form className="grid gap-6" onSubmit={form.handleSubmit(handleAddServer)}>
      <Controller
        name="provider"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Provider</FieldLabel>
            <FieldDescription>
              The name of the company used to host the project
            </FieldDescription>
            <FieldContent>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="providerUrl"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Provider Url</FieldLabel>
            <FieldDescription>Link to the service dashboard</FieldDescription>
            <FieldContent>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="ipAddress"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>IP Address</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="companyId"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Company Id</FieldLabel>
            <FieldContent>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {companies?.map((company) => (
                    <SelectItem key={company.id} value={company.id}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="projectId"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>projectId</FieldLabel>
            <FieldContent>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Project" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {projects?.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
