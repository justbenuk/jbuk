'use client'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ToggleMode() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <div>
      {
        theme === 'light' ? (
          <Button size={'icon'} variant={'ghost'} onClick={() => setTheme('dark')}>
            <MoonIcon className="size-5" />
          </Button>
        ) : (
          <Button size={'icon'} variant={'ghost'} onClick={() => setTheme('light')}>
            <SunIcon className="size-5" />
          </Button>
        )
      }
    </div>

  )
}
