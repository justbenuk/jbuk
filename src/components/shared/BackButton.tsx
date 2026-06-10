import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton({ link }: { link: string }) {
  return (
    <Link href={link} className="flex flex-row gap-2 pb-4 text-primary">
      <ArrowLeft />
      <span>Go Back</span>
    </Link>
  )
}

