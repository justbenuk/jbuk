import { ProjectProps } from "./project-types"
import { UserProps } from "./user-types"

export interface MediaProps {
  id: string
  key: string
  url: string
  name?: string | null | undefined
  alt?: string | null | undefined
  caption?: string | null | undefined
  type: string
  mimeType?: string
  size?: Number
  width?: Number
  height?: Number
  uploadedById?: string | null | undefined
  uploadedBy?: UserProps | null | undefined
  createdAt: Date
  updatedAt: Date
  project?: ProjectProps[]
  projectId?: string
}
