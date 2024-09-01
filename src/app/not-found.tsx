import ButtonLink from "@/components/ui/buttons-and-links/button-link";
import Link from "next/link";
import MainNavbar from "@/components/navigation/main-navbar";
import Footer from "@/components/footer/footer";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <MainNavbar />
      <main className="text-center">
        <h2 className="text-5xl font-bold">Sorry! This does not exist</h2>
        <p className="m-4 mb-10">
          If you keep seeing this message, Please contact me{" "}
          <Link href="/contact">ben@justben.uk</Link>
        </p>
        <ButtonLink route="/">Return Home</ButtonLink>
      </main>
      <Footer />
    </div>
  );
}
