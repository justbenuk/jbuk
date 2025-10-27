import LoginForm from "@/features/auth/forms/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">Enter your email to access your account</p>
      </div>
      <LoginForm />
    </div>
  )
}

