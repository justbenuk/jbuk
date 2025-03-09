import SiteNavigation from "@/components/site-navigation"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export default function SiteLayout({ children }: Props) {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <SiteNavigation />
            <main className="flex-grow">
                {children}
            </main>
            <footer>This is the footer</footer>
        </div>
    )
}
