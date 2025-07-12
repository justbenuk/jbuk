import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";

export default function ContactSocials() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 text-lg">
      <Link href={'/'}>
        <FaFacebook className="size-6" />
      </Link>
    </div>
  )
}

