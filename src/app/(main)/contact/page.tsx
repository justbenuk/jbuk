import ContactForm from "@/forms/contact-form";
import Container from "@/components/global/container";
import PageTitle from "@/components/global/page-title";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaTwitter } from "react-icons/fa";
import ContactItem from "@/components/contact/contact-item";

export default function ContactPage() {
  return (
    <Container>
      <PageTitle title="Contact Me" />
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-16">
        <div>
          <h3 className="text-xl font-semibold text-gray-600 uppercase">
            Contact Me
          </h3>
          <h1 className="text-4xl uppercase font-semibold py-2">
            Get In Touch
          </h1>
          <p>
            Got a project you need help with? Hit me up! Whether it&apos;s a
            brand-new site or an existing one that&apos;s throwing a tantrum,
            I&apos;m here to fix, build, and make the internet a better place,
            one bug at a time.
          </p>
          <div className="my-8">
            <ul className="flex flex-col gap-10">
              <ContactItem
                link="tel:07916019809"
                icon={<FaPhone className="text-2xl" />}
                title="Phone"
                text="07916019809"
              />
              <Link href="mail:justbenuk@gmail.com">
                <li className="flex flex-row items-center gap-6">
                  <div className="border rounded-full p-4">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="uppercase text-xl font-semibold">Email</h1>
                    <p>justbenuk@gmail.com</p>
                  </div>
                </li>
              </Link>
              <a href="https://x.com/justbenuk" target="_blank">
                <li className="flex flex-row items-center gap-6">
                  <div className="border rounded-full p-4">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="uppercase text-xl font-semibold">Twitter</h1>
                    <p>@justbnuk</p>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-black/10 p-4 lg:p-8 rounded-2xl">
            <h1 className=" text-xl lg:text-4xl uppercase font-semibold">
              Make Appointment
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
