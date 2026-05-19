import { Code2Icon, PencilIcon, PhoneCall, ShipIcon } from "lucide-react";

export default function HomePanningSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center justify-center text-center gap-4 border-2 py-12 px-4 bg-secondary rounded">
        <PhoneCall className="size-8" />
        <h1 className="text-2xl font-bold text-primary">Discussion</h1>
        <p>Lets talk about the project, what your expectations, want&apos;s and needs are</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-4 border-2 py-12 px-4 bg-secondary rounded">
        <PencilIcon className="size-8" />
        <h1 className="text-2xl font-bold text-primary">Planning</h1>
        <p>Turn the discussion into a plan and iron out the edges. Get ready for build</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-4 border-2 py-12 px-4 bg-secondary rounded">
        <Code2Icon className="size-8" />
        <h1 className="text-2xl font-bold text-primary">Build</h1>
        <p>The most important, turn your design into the website your expecting</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-4 border-2 py-12 px-4 bg-secondary rounded">
        <ShipIcon className="size-8" />
        <h1 className="text-2xl font-bold text-primary">Ship</h1>
        <p>Fully test and build your application. Make any changes if required</p>
      </div>
    </div>
  )
}

