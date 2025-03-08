import { Link } from "@inertiajs/react";
import SiteNavList from "./site-nav-list";

export default function SiteNavigation() {
    return (
        <header className="flex flex-row items-center justify-between py-4 px-6 border-b uppercase font-semibold">
            <h1 className="text-lg">Just Ben UK</h1>
            <SiteNavList />
            <div>
                <Link href='/contact' className="border-green-500 border px-8 py-2 rounded text-green-500 hover:text-white hover:bg-green-500 hover:border-none transition-colors duration-200 ease-in-out">Hire Me</Link>
            </div>
        </header>
    )
}
