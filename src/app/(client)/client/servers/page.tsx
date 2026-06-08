import type { Metadata } from 'next';
import ClientContainer from "@/components/shared/ClientContainer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { ProjectorIcon } from "lucide-react"

export const metadata: Metadata = {
  title: 'Servers'
};

export default function ServersPage() {
  const servers = false

  if (!servers) return (
    <ClientContainer>
      <Card className="pt-0">
        <CardHeader className="bg-primary text-muted py-4">
          <CardTitle>Servers</CardTitle>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant={'icon'}>
                <ProjectorIcon />
              </EmptyMedia>
              <EmptyTitle>No Servers Yet</EmptyTitle>
              <EmptyDescription>No Servers have been added yet.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardContent>
      </Card>
    </ClientContainer>
  )
  return (
    <div>Servers</div>
  )
}

