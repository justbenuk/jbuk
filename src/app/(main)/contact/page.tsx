import ContactForm from "@/forms/contact-form";
export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 xl:px-0 py-24 min-h-[70dvh]">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-evenly gap-10">
            <h1 className="text-sm md:text-xl lg:text-2xl uppercase text-gray-400 font-semibold">
              ben@justben.uk
            </h1>
            <h1 className="text-sm md:text-xl lg:text-2xl uppercase text-gray-400 font-semibold">
              07916 019 809
            </h1>
          </div>
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl py-6 font-extrabold italic uppercase">
            Are You Ready
          </h1>
          <p>If you ready to start discussing your project, Lets Talk </p>
          <div className="py-8">
            <ContactForm />
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.4370145636267!2d-1.675418823313033!3d52.61594637208644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870abf0272a3239%3A0xb8375ffca628737f!2sParkside%2C%20Tamworth!5e0!3m2!1sen!2suk!4v1724352364932!5m2!1sen!2suk"
            width="600"
            height="450"
            loading="lazy"
            className="w-full min-h-full rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
