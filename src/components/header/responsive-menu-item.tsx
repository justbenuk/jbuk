import Link from "next/link"

type Props = {
  item: {
    name: string
    href: string
  }
}

export default function ResponsiveMenuItem({ item }: Props) {
  return (
    <Link href={item.href}><h1 className="block">{item.name}</h1></Link>
  )
}
