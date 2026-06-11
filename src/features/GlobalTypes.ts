import { ReactNode } from "react"

export interface CategoryProps {
  id: string
  name: string
  description: string | null
  createdAt: Date
  updatedAt: Date
}

export interface GlobalProps {
  children: ReactNode
  className?: string
}
