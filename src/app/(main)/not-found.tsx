import ButtonLink from "@/components/ui/buttons-and-links/button-link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold">Sorry! This does not exisst</h2>
      <p className="m-4 mb-10">I have no idea what could have caused this.</p>
      <ButtonLink route="/">Return Home</ButtonLink>
    </div>
  );
}
