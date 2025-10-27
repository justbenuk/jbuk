import { Button } from "@/components/ui/button"
import DashboardTitle from "@/features/dashbnoard/components/dashboard-title"
import { PlusIcon } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Dashboard'
}
export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <DashboardTitle title="Dashboard" />
        <Button asChild className="bg-teal-500">
          <Link href={'/dashboard/users/new'}>
            <PlusIcon />
            <span>Add User</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

