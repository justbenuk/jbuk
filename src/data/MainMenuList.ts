import { HomeIcon, MailIcon, NewspaperIcon, PencilIcon, User2Icon } from "lucide-react";

export const MAINMENULIST = [
  {
    name: 'home',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'about',
    href: '/about',
    icon: User2Icon,
  },
  {
    name: 'blog',
    href: '/posts',
    icon: NewspaperIcon,
  },
  {
    name: 'projects',
    href: '/projects',
    icon: PencilIcon
  },
  {
    name: 'contact',
    href: '/contact',
    icon: MailIcon
  }
]
