import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeContactSection() {
  return (
    <div className="border-2 border-dashed border-primary py-12 px-6 rounded-xl">
      <div className="flex flex-col items-center justify-center text-center gap-6 md:flex-row md:text-start md:gap-20">
        <div>
          <h1 className="bg-linear-to-br from-foreground to-primary bg-clip-text text-2xl font-bold text-transparent dark:from-white">Do you have a new or existing project you want me to work on?</h1>
          <p>Lets get together to discuss your ideas. From changing existing sites to creating new ones. I&apos;m open to anything</p>
        </div>
        <Button asChild className="px-12 py-6">
          <Link href={'/contact'} className="font-semibold">Let&apos;s Talk</Link>
        </Button>
      </div>
    </div>
  )
}
