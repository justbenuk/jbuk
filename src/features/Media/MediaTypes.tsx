export interface MediaProps {
  id: string
  key: string
  url: string
  name?: string | null | undefined
  alt?: string | null | undefined
  caption?: string | null | undefined
  type: string
  mimeType?: string | null | undefined
  size?: Number | null | undefined
  width?: Number | null | undefined
  height?: Number | null | undefined
  uploadedById?: string | null | undefined
  createdAt: Date
  updatedAt: Date
  projectId?: string | null | undefined
}
