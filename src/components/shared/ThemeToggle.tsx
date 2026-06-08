'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeToggle() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {theme === 'dark' ? (
        <Button onClick={() => setTheme('light')} variant={'ghost'} size={'icon'}>
          <SunIcon className="size-4" />
        </Button>
      ) : (
        <Button onClick={() => setTheme('dark')} variant={'ghost'} size={'icon'}>
          <MoonIcon className="size-4" />
        </Button>
      )}
    </>
  )
}

