import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={'/'} className="flex flex-1">
      <Image src={'/images/assets/me.png'} height={40} width={40} alt="site logo" className="rounded-full border-3 border-teal-500" />
    </Link>
  )
}

