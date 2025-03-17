import Footer from "@/components/footer/footer";
import Container from "@/components/global/container";
import SiteNavigation from "@/components/navigation/site-navigation";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <SiteNavigation />
      <Container className="text-center">
        <h1 className="text-4xl uppercase font-semibold">Something Went Wrong</h1>
        <p className="my-8">Im not sure at this point what it could be, so best solution would be to go home</p>
        <Link href='/' className="px-12 py-2 rounded-lg uppercase font-semibold text-white bg-green-500 shadow-xl">Go Home</Link>
      </Container>
      <Footer />
    </div>
  )
}
