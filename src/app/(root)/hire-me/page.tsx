import ContactSocials from "@/components/socials/contact-socials";

export default function HireMePage() {
  return (
    <div className="h-screen">
      <div className="h-[60dvh] bg-gray-900">Map Goes Here</div>
      <div className="relative -top-50 bg-white max-w-5xl mx-auto lg:rounded-2xl h-[500px]">
        <div className="p-20 flex flex-col justify-between h-full">
          <p className="text-lg">If you have a project you would like me to work on. Please use the contact form below to get in touch</p>
          <div>Contact form will go here</div>
          <ContactSocials />
        </div>
      </div>
    </div>
  )
}

