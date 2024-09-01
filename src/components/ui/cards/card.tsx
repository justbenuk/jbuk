import Image from "next/image";
import Link from "next/link";

interface CProps {
  item: {
    slug: string;
    image: string;
    title: string;
  };
}
export default function Card({ item }: CProps) {
  return (
    <Link href={`/work/${item.slug}`}>
      <div className="flex flex-col h-full">
        <div className="overflow-hidden h-full w-full">
          <Image
            src={item.image}
            alt="Project Image"
            height={600}
            width={600}
            className="w-full h-full hover:scale-125 transition-all duration-150"
          />
        </div>
        <h1 className="text-xl md:text-3xl xl:text-4xl italic font-bold py-4">
          {item.title}
        </h1>
      </div>
    </Link>
  );
}
