import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import LoginUserForm from "@/features/Authentication/forms/LoginUserForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login - Just Ben UK",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <LoginUserForm />
          </div>
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/assets/profile.png"
              alt="Image"
              fill
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
