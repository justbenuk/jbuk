import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MOCKPROJECTPOSTS } from "@/data/MockProjectPosts";
import Link from "next/link";
import Image from "next/image";
export default function HomeProjectsSection() {

  const posts = MOCKPROJECTPOSTS.slice(0, 6)

  return (
    <section>
      <div className="flex flex-row items-center justify-between pb-6">
        <h1 className="text-xl font-semibold text-muted-foreground">Latest Projects</h1>
        <Link href={'/projects'} className="text-muted-foreground">View All</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={post.slug} key={post.id}>
            <Card className="rounded p-0">
              <CardHeader className="text-xs py-1 px-2 flex flex-row items-center justify-between">
                <CardTitle>{post.category}</CardTitle>
                <CardDescription className="flex flex-row items-center gap-2">
                  <div className="bg-yellow-500 rounded-full h-3 w-3"></div>
                  <div className="bg-green-500 rounded-full h-3 w-3"></div>
                  <div className="bg-red-500 rounded-full h-3 w-3"></div>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Image src={post.image} alt="post image" width={500} height={300} className="w-full h-37.5" />
                <div className="grid gap-3 p-4">
                  <h3 className="text-primary font-semibold">{post.title}</h3>
                  <p>{post.excerpt.slice(0, 100)}</p>
                </div>
              </CardContent>
              <CardFooter className=" flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between text-xs">
                <span>{post.author.name}</span>
                <span>Posted On 21/05/2026</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
