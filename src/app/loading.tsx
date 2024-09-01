import MainNavbar from "@/components/navigation/main-navbar";
import Footer from "@/components/footer/footer";
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <MainNavbar />
      <span className="loading loading-bars loading-lg"></span>
      <Footer />
    </div>
  );
}
