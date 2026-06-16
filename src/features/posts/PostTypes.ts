import { UserProps } from "../Authentication/AuthenticationTypes";

export interface PostProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: string;
  author: UserProps;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  published: boolean;
}
