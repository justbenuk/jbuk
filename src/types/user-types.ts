export interface UserProps {
  id: string
  name: string
  email: string
  emailVerified: boolean
  image?: string | null | undefined
  createdAt: Date
  updatedAt: Date
  role?: string | null | undefined
  banned?: boolean | null | undefined
  banReason?: string | null | undefined
  banExpires?: Date | null | undefined
}
