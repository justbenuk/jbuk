import Link from "next/link";
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
          <Link href="/">
            <TbBrandFacebook className="text-3xl" />
          </Link>
          <Link href="/">
            <TbBrandTwitter className="text-3xl" />
          </Link>
          <Link href="/">
            <TbBrandDiscord className="text-3xl" />
          </Link>
          <Link href="/">
            <TbBrandGmail className="text-3xl" />
          </Link>
          <Link href="/">
            <TbBrandWhatsapp className="text-3xl" />
          </Link>
          <Link href="/">
            <TbPhone className="text-3xl" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
