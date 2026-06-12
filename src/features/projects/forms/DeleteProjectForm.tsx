import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { deleteProjectById } from "../ProjectActions";
import { toast } from "sonner";

export default function DeleteProjectForm({ projectId }: { projectId: string }) {

  async function handleDeleteProject() {
    const { success, message } = await deleteProjectById(projectId)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }
  return (
    <form onSubmit={handleDeleteProject}>
      <Button variant={'outline'} size={'icon-xs'} className="text-red-500">
        <TrashIcon />
      </Button>
    </form>
  )
}

