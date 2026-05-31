
interface LinearProps {
  text: string
  size?: string
}

export default function LinerText({ text, size = 'text-5xl sm:text-7xl lg:text-8xl' }: LinearProps) {
  return (
    <h1 className={`bg-linear-to-br from-foreground to-primary bg-clip-text  font-bold text-transparent dark:from-white py-4 ${size}`}> {text}</h1 >
  )
}

