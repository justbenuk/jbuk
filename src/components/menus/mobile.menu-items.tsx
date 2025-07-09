import Link from "next/link"

type MobileMenuProps = {
  item: {
    name: string
    href: string
  }
}
export default function MobileMenuItems({ item }: MobileMenuProps) {
  return (
    <Link href={item.href}>{item.name}</Link>
  )
}

