"use client";

import { LoginUserAction } from "@/actions/AuthActions";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { LoginUserSchema } from "../AuthenticationValidationSchema";

export default function LoginUserForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLoginUser(values: z.infer<typeof LoginUserSchema>) {
    const { success, message } = await LoginUserAction(values);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      router.push("/client");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleLoginUser)} className="grid gap-6">
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldContent>
              <Input {...field} placeholder="jdoe@example.com" />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Password</FieldLabel>
            <FieldContent>
              <Input {...field} type="password" />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Button>Login</Button>
    </form>
  );
}
