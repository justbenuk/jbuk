import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { DeleteServerById } from "../ServerActions";
import { toast } from "sonner";

export function DeleteServerForm({ id }: { id: string }) {
  async function handleDeleteServer() {
    const response = await DeleteServerById(id);
    if (response.success) toast.success("Server deleted");
  }
  return (
    <form onSubmit={handleDeleteServer}>
      <Button variant={"outline"} size={"icon-xs"} className="text-red-500">
        <TrashIcon />
      </Button>
    </form>
  );
}
