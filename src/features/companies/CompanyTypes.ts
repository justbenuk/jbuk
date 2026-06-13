export interface CompanyProps {
  id: string
  name: string
  email: string
  image: string | null
  contactNumber: string
  emergencyContact: string
  address: string | null
  domain: string | null
  long: string | null
  lat: string | null
  userId: string
  createdAt: Date
  updatedAt: Date
}
