export interface UserProps {
  user: {
    name: string
    email: string
    emailVerified: boolean | null
    image?: string | null
    createdAt: Date
    updatedAt: Date
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | null
    id: string
  }
}
