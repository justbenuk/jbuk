export interface MessageProps {
  id: string
  name: string
  email: string
  phoneNumber?: string | null | undefined
  domain?: string | null | undefined
  message: string
  createdAt: Date
}
