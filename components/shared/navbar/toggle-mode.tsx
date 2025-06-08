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
    <div className="absolute bottom-5 right-10">
      <div>
        {
          theme === 'light' ? (
            <Button size={'icon'} variant={'outline'} onClick={() => setTheme('dark')}>
              <MoonIcon className="size-4" />
            </Button>
          ) : (
            <Button size={'icon'} variant={'outline'} onClick={() => setTheme('light')}>
              <SunIcon className="size-4" />
            </Button>
          )
        }
      </div>
    </div>

  )
}
