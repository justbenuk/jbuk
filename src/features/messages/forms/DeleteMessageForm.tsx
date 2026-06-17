import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { deleteMessageById } from "../MessageActions";

export default function DeleteMessageForm({
  messageId,
}: {
  messageId: string;
}) {
  async function handleDeleteMessage() {
    const response = await deleteMessageById(messageId);
    if (!response) {
      toast.error("Failed to delete message");
    } else {
      toast.success("Message Deleted");
    }
  }

  return (
    <form onSubmit={handleDeleteMessage}>
      <Button variant={"outline"} size={"icon-xs"} className="text-red-500">
        <TrashIcon />
      </Button>
    </form>
  );
}
