import SitePageContainer from "@/components/site-page-container";
import SiteLayout from "@/layouts/site-layout";
import { Head } from "@inertiajs/react";

export default function AboutPage() {
    return (
        <SiteLayout>
            <Head title="About Me" />
            <SitePageContainer className="mt-10">This is the about page</SitePageContainer>
        </SiteLayout>
    )
}
