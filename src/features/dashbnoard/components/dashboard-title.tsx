export default function DashboardTitle({ title, description }: { title: string, description?: string }) {
  return (
    <div>
      <h1 className="font-semibold">{title}</h1>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}

