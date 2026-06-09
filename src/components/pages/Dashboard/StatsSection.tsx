'use client'
import { fetchDashboardStats } from "@/actions/StatsActions";
import ErrorCard from "@/components/shared/ErrorCard";
import TripleBocSkeleton from "@/components/skeletons/TripleBocSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StatsSection() {

  const [stats, setStats] = useState<{ messages: number, users: number }>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetchDashboardStats()

      if (response.success && response.data) {
        setStats(response.data)
      } else {
        setError('Failed to load Stats')
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) return <TripleBocSkeleton />
  if (error) return <ErrorCard message={error} />

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Total Users</h1>
              <Link href={'/dashboard/projects'}>
                <CircleArrowOutUpRightIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-4xl">{stats?.users}</h1>
              <span>All Users</span>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Total Messages</h1>
              <Link href={'/dashboard/servers'}>
                <CircleArrowOutUpRightIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-4xl">{stats?.messages}</h1>
              <span>All Messages</span>
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
              <span>All Messages</span>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

