import Link from "next/link";
import Image from "next/image";

export default function MainLogo() {
  return (
    <Link href={'/'} className="border-2 border-primary rounded-full overflow-hidden">
      <Image src={'/assets/me-nobg.png'} alt="site logo" height={45} width={45} />
    </Link>
  )
}

