import SitePageContainer from "@/components/site-page-container"
import SiteLayout from "@/layouts/site-layout"
import { Head } from "@inertiajs/react"

export default function index() {
    return (
        <SiteLayout>
            <Head title="Welcome" />
            <SitePageContainer className="mt-10">This is the home page</SitePageContainer>
        </SiteLayout>
    )
}
