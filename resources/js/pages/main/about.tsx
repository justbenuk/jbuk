import SitePageContainer from "@/components/site-page-container";
import { Head } from "@inertiajs/react";

export default function AboutPage() {
    return (
        <>
            <Head title="Contact Me" />
            <SitePageContainer className="mt-10">This is the about page</SitePageContainer>
        </>
    )
}
