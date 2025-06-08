import Container from "@/components/shared/container";
import CreateContactForm from "@/forms/createContactForm";

export const metadata = {
  title: "Let's Talk",
  description: "If you have a project you would like me to work on. Please contact me to find out more"
}

export default function LetsTalkPage() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[90dvh]">
        <div className="w-full grid lg:grid-cols-2 gap-10">
          <div className="space-y-2 pr-6">
            <h1 className="text-5xl font-bold">Let&apos;s Talk</h1>
            <p>If you have a project you like me to work on, or if you have any questions. Feel free to contact me.</p>
          </div>
          <CreateContactForm />
        </div>
      </div>
    </Container>
  )
}

