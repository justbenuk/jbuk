import type { Metadata } from 'next';
import ClientContainer from "@/components/shared/ClientContainer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { ProjectorIcon } from "lucide-react"

export const metadata: Metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  const projects = false

  if (!projects) return (
    <ClientContainer>
      <Card className="pt-0">
        <CardHeader className="bg-primary text-muted py-4">
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant={'icon'}>
                <ProjectorIcon />
              </EmptyMedia>
              <EmptyTitle>No Projects Yet</EmptyTitle>
              <EmptyDescription>No projects have been started yet. Once I start your project, I will add it here so you can follow progress</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardContent>
      </Card>
    </ClientContainer>
  )
  return (
    <div>projects</div>
  )
}

