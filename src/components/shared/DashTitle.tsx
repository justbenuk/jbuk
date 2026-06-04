export default function DashTitle({ title, description }: { title: string, description?: string }) {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <span className="text-sm text-muted-foreground">{description}</span>
    </div>
  )
}

