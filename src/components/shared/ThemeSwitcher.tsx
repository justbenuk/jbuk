'use client'

import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div suppressHydrationWarning>
      {isDark ? (
        <Button variant={'ghost'} onClick={() => setTheme('light')} aria-label="Switch to light theme">
          <SunIcon className="size-4" />
        </Button>
      ) : (
        <Button variant={'ghost'} onClick={() => setTheme('dark')} aria-label="Switch to dark theme">
          <MoonIcon className="size-4" />
        </Button>
      )}
    </div>
  )
}
