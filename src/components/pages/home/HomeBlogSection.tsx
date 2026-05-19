import { Badge } from "@/components/ui/badge";
import { MOCKBLOGPOSTS } from "@/data/MockBlogPosts";
import Link from "next/link";

export default function HomeBlogSection() {

  const posts = MOCKBLOGPOSTS.slice(0, 3)

  return (
    <section>
      <div className="flex flex-row items-center justify-between pb-6">
        <h1 className="text-xl font-semibold text-muted-foreground">Latest Posts</h1>
        <Link href={'/posts'} className="text-muted-foreground">View All</Link>
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link href={post.slug} key={post.id} className="grid gap-6 border-b-4 border-dashed pb-4">
            <div>
              <h1 className="text-primary font-semibold text-xl">{post.title}</h1>
              <p>{post.excerpt}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 md:flex-row md:items-center md:justify-between">
              <Badge>{post.category}</Badge>
              <div className="text-xs">Created by {post.author.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
