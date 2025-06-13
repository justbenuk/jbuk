import Hero from "@/components/hero/hero";

export const metadata = {
  title: "Welcome",
};
export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
    </div>
  );
}
