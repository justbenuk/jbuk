import { getDashboardStats } from "@/actions/StatsActions";
import DashTitle from "@/components/shared/DashTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";


export default async function DashboardPage() {
  const { messages } = await getDashboardStats()

  return (
    <div className="grid gap-6">
      <DashTitle title="Dashboard" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Total Projects</h1>
              <Link href={'/dashboard/projects'}>
                <CircleArrowOutUpRightIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-5xl font-bold">{messages}</h1>
              <span>All Projects</span>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Total Servers</h1>
              <Link href={'/dashboard/servers'}>
                <CircleArrowOutUpRightIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-5xl font-bold">{messages}</h1>
              <span>All Servers</span>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Total Messages</h1>
              <Link href={'/dashboard/messages'}>
                <CircleArrowOutUpRightIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-5xl font-bold">{messages}</h1>
              <span>All Messages</span>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

