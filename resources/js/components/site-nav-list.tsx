import SiteNavItem from "./site-nav-item"
export default function SiteNavList() {
    const navItems = [
        {
            name: 'home',
            href: '/'
        },
        {
            name: 'about',
            href: '/about'
        },
        {
            name: 'services',
            href: '/services'
        },
        {
            name: 'projects',
            href: '/projects'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
    ]
    return (
        <nav className=" flex flex-row space-x-4">
            {navItems.map((item) => (
                <SiteNavItem href={item.href} name={item.name} />
            ))}
        </nav>
    )
}
