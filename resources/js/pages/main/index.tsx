import SiteNavigation from "@/components/site-navigation"
import SitePageContainer from "@/components/site-page-container"
import { Head } from "@inertiajs/react"

export default function index() {
    return (
        <>
            <Head title="Welcome" />
            <SiteNavigation />
            <SitePageContainer className="mt-10">This is the home page</SitePageContainer>
        </>
    )
}
