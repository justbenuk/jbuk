"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";
import { DeletePostById } from "../PostActions";

export function DeletePostForm({ id }: { id: string }) {
  async function handleDelete() {
    const response = await DeletePostById(id);

    if (response) {
      toast.success("Deleted");
    } else {
      toast.error("Failed to Delete");
    }
  }
  return (
    <form onSubmit={handleDelete}>
      <Button variant={"outline"} size={"icon-xs"} className="text-red-500">
        <TrashIcon />
      </Button>
    </form>
  );
}
