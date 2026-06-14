import { MediaProps } from "../Media/MediaTypes";

export interface ProjectCategoryProps {
  id: string;
  name: string;
  slug: string;
  description: string | null | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: string;
  media: MediaProps[] | null | undefined;
  published: boolean;
  featured: boolean;
  userId: string;
  projectCategoryId: string;
  companyId?: string | null | undefined;
  createdAt: Date;
  updatedAt: Date;
}
