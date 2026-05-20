'use client'

import { Button } from "../ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeSwitcher() {

  function toggleTheme() {
    const root = document.documentElement
    const isDark = root.classList.toggle('dark')

    root.style.colorScheme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <Button variant={'ghost'} onClick={toggleTheme} aria-label="Toggle theme">
      <SunIcon className="hidden size-4 dark:block" />
      <MoonIcon className="size-4 dark:hidden" />
    </Button>
  )
}
