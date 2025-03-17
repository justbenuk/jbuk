import Link from "next/link";
import { SiDiscord, SiFacebook, SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function SocialList() {
  return (
    <ul className="flex flex-row items-center justify-center space-x-4 mt-10">
      <Link href='/'><SiFacebook size={28} className="hover:animate-bounce" /></Link>
      <Link href='/'><SiX size={28} className="hover:animate-bounce" /></Link>
      <Link href='/'><SiLinkedin size={28} className="hover:animate-bounce" /></Link>
      <Link href='/'><SiDiscord size={28} className="hover:animate-bounce" /></Link>
      <Link href='/'><SiGithub size={28} className="hover:animate-bounce" /></Link>
    </ul>
  )
}
