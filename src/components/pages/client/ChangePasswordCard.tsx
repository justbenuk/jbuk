import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ChangePasswordForm from "@/forms/user/ChangePasswordForm";

export default function ChangePasswordCard() {
  return (
    <Card className="pt-0">
      <CardHeader className="bg-primary text-muted py-4">
        <CardTitle>Change Password</CardTitle>
      </CardHeader>
      <CardContent>
        <ChangePasswordForm />
      </CardContent>
    </Card>
  )
}

