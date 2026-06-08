import { FileWarning } from "lucide-react";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";

export default function ErrorCard({ message }: { message: string }) {
  return (
    <Empty className="border-2 border-red-500">
      <EmptyHeader className="text-red-500">
        <EmptyMedia variant={'icon'}>
          <FileWarning className="size-8 text-red-500" />
        </EmptyMedia>
        <EmptyTitle className="font-semibold">Something Went Wrong</EmptyTitle>
        <EmptyDescription className="text-red-500 text-lg">{message}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

