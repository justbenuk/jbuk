'use client'
import { fetchDashboardStats } from "@/actions/StatsActions";
import ErrorCard from "@/components/shared/ErrorCard";
import BoxSkeleton from "@/components/skeletons/TripleBocSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowOutUpRightIcon, ImagesIcon, MessageCircleMore, ServerIcon, UsersIcon } from "lucide-react";
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

  if (loading) return <BoxSkeleton length={4} />
  if (error) return <ErrorCard message={error} />

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="ring-primary">
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl text-primary">Total Users</h1>
              <Link href={'/dashboard/projects'}>
                <UsersIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-4xl">{stats?.users}</h1>
              <span>All Users</span>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="ring-secondary">
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl text-secondary">Total Messages</h1>
              <Link href={'/dashboard/servers'}>
                <MessageCircleMore />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-4xl">{stats?.messages}</h1>
              <span>All Messages</span>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="ring-orange-300">
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl text-orange-300">Total Projects</h1>
              <Link href={'/dashboard/projects'}>
                <ImagesIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-4xl">{stats?.messages}</h1>
              <span>All Projects</span>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="ring-blue-300">
          <CardHeader className="grid gap-3">
            <CardTitle className="flex flex-row items-center justify-between">
              <h1 className="text-xl text-blue-300">Total Servers</h1>
              <Link href={'/dashboard/servers'}>
                <ServerIcon />
              </Link>
            </CardTitle>
            <CardContent className="grid gap-3 p-0">
              <h1 className="text-4xl">{stats?.messages}</h1>
              <span>All Servers</span>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

