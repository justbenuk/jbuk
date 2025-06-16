import Container from "@/components/shared/container";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: 'Client Area'
}

export default function ClientPage() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Link href={'/register'}>
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>If you are a new client. Please register for an account</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href={'/login'}>
          <Card className="bg-yellow-500 text-black">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription className="text-black">Welcome back to your client portal</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </Container>
  )
}

