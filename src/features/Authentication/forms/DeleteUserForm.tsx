import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteUserById } from "../AuthenticationActions";
import { toast } from "sonner";

export default function DeleteUserForm({ userId }: { userId?: string }) {

  async function handleDeleteUser() {
    const { success, message } = await deleteUserById(userId || '')

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }


  return (
    <form onSubmit={handleDeleteUser}>
      <Button variant={'outline'} size={'icon-xs'} className="text-red-500">
        <Trash />
      </Button>
    </form>
  )
}

