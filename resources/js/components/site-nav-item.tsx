import { Link, usePage } from "@inertiajs/react"

type Props = {
    name: string
    href: string
}
export default function SiteNavItem({ name, href }: Props) {
    const { url } = usePage()
    return (
        <Link href={href} className={url === href ? 'underline underline-offset-8 decoration-2 decoration-green-500' : 'text-gray-500'} >{name}</Link>
    )
}
