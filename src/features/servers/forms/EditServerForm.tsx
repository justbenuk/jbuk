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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import z from "zod";
import { useEffect, useState } from "react";
import { CompanyProps } from "@/features/companies/CompanyTypes";
import { ProjectProps } from "@/features/projects/ProjectTypes";
import { fetchAllCompanies } from "@/features/companies/CompanyActions";
import { fetchAllProjects } from "@/features/projects/ProjectActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ServerProps } from "../ServerTypes";
import ErrorCard from "@/components/shared/ErrorCard";
import { EditServer } from "../ServerActions";

export function EditServerForm({ server }: { server: ServerProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [error, setError] = useState<string | null>();
  const form = useForm({
    resolver: zodResolver(AddServerSchema),
    defaultValues: {
      provider: server.provider,
      providerUrl: server.providerUrl,
      ipAddress: server.ipAddress,
      companyId: server.company.id,
      projectId: server.project.id,
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
    const response = await EditServer(values, server.id);

    if (response.success) {
      toast.success("Updated Server");
      router.push("/dashboard/servers");
    } else {
      toast.error("Failed to update");
    }
  }

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
            <FieldLabel>Company</FieldLabel>
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
            <FieldLabel>Project</FieldLabel>
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
