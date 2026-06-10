import { CompanyProps } from "./company-types"
import { MediaProps } from "./media-types"
import { UserProps } from "./user-types"

export interface ProjectCategoryProps {
  id: string
  name: string
  slug: string
  description: string | null | undefined
  createdAt: Date
  updatedAt: Date
  projects: ProjectProps[]

}

export interface ProjectProps {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  content: string
  author: UserProps
  company?: CompanyProps | null | undefined
  category: ProjectCategoryProps
  media: MediaProps[]
  published: Boolean
  featured: Boolean
  userId: string
  projectCategoryId: string
  companyId?: string | null | undefined
  createdAt: Date
  updatedAt: Date

}
