import { UserProps } from "@/types/user-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
export default function UserCard({ user }: { user: UserProps }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-10">
        <Image src={user.image || '/assets/profile.png'} alt={user.name} width={200} height={200} className="rounded-xl overflow-hidden" loading="eager" />
        <div className="flex flex-wrap gap-10">
          <div>
            <span>Name</span>
            <h1 className="text-xl font-semibold">{user.name}</h1>
          </div>
          <div>
            <span>Email</span>
            <h1 className="text-xl font-semibold">{user.email}</h1>
          </div>
          <div>
            <span>Role</span>
            <h1 className="text-xl font-semibold">{user.role}</h1>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
