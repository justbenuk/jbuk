import { authItems } from "@/data/menu";
import Link from "next/link";

export default function AuthMenuList() {
  return (
    <ul className="flex flex-row items-center justify-center space-x-4">
      {authItems.map((authItem, idx) => (
        <Link className="uppercase text-sm font-semibold" key={idx} href={authItem.href}>{authItem.name}</Link>
      ))}
    </ul>
  )
}
