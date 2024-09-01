import Image from "next/image";
import {
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandDiscord,
  TbBrandGmail,
  TbBrandWhatsapp,
  TbPhone,
} from "react-icons/tb";
export default function Footer() {
  return (
    <footer className="footer footer-center bg-gray-900 text-gray-300 px-10 py-12">
      <aside>
        <div className="overflow-hidden py-4">
          <Image
            src="/images/me.png"
            alt="My Profile Picture"
            height={70}
            width={70}
            className="rounded-full border-2 border-purple-500"
          />
        </div>
        <p className="font-bold text-xl">
          Just Ben UK
          <br />
          Building Cistom Web Applications For Fun
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href="https://www.facebook.com/justbenuk/">
            <TbBrandFacebook className="text-3xl" />
          </a>
          <a target="_blank" href="https://x.com/justbenuk">
            <TbBrandTwitter className="text-3xl" />
          </a>
          <a target="_blank" href="https://discord.gg/XdBvC5Sp">
            <TbBrandDiscord className="text-3xl" />
          </a>
          <a target="_blank" href="mailto:ben@justben.uk">
            <TbBrandGmail className="text-3xl" />
          </a>
          <a target="_blank" href="https://wa.me/447916019809">
            <TbBrandWhatsapp className="text-3xl" />
          </a>
          <a target="_blank" href="tel:07916019809">
            <TbPhone className="text-3xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
