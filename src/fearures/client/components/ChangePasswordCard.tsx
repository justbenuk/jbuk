import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import ChangePasswordForm from "@/forms/user/ChangePasswordForm";

export default function ChangePasswordCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>Change your password</CardDescription>
      </CardHeader>
      <CardContent>
        <ChangePasswordForm />
      </CardContent>
    </Card>
  )
}

