import Link from "next/link";

type Props = {
  item: {
    name: string
    href: string
  }
}

export default function DesktopMenuItem({ item }: Props) {
  return (
    <Link href={item.href}><h1>{item.name}</h1></Link>
  )
}
