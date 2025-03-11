import PageContainer from "../global/page-container"
import NoPostsToShow from "./no-posts-to-show"
import { currentProject } from "@/data/currentProject"
import Image from "next/image"

export default function CurrentProject() {

  const current = currentProject

  if (current.length < 1) return <NoPostsToShow />

  return (
    <PageContainer>
      <div className="max-w-5xl mx-auto">
        {current.map((item, key) => (
          <div key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="border-2 rounded">
              <div className="p-1 lg:p-3 flex gap-2 items-center">
                <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
              </div>
              <Image src={item.image} alt="Project Image" width={300} height={300} className="w-full shadow-2xl shadow-gray-400" />
            </div>
            <div key={key} className="flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-semibold">Current <span className="text-green-500">Project</span></h1>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.content.slice(0, 200)} ...</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href={item.url} target="_blank" className="bg-green-500 px-8 py-2 rounded text-white uppercase font-semibold">Website</a>
                <a href={item.github} target="_blank" className="bg-red-500 px-8 py-2 rounded text-white uppercase font-semibold">Github</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer >
  )
}
