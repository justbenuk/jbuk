import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { deleteCompanyById } from "../CompanyActions";
import { toast } from "sonner";

export default function DeleteCompanyForm({ id }: { id: string }) {
  async function handleDelete() {
    const response = await deleteCompanyById(id);

    if (response) {
      toast.success("Company Deleted");
    } else {
      toast.error("Failed to delete company");
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
