import { deleteCategoryById } from "@/actions/ProjectActions"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"
import { toast } from "sonner"

export default function DeleteProjectForm({ categoryId }: { categoryId: string }) {

  async function handleDeleteCategoryById() {
    const { success, message } = await deleteCategoryById(categoryId)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }

  return (
    <form onSubmit={handleDeleteCategoryById}>
      <Button variant={'outline'} size={'icon-xs'} className="text-red-500">
        <TrashIcon />
      </Button>
    </form>
  )
}

