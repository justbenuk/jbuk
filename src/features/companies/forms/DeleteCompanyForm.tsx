import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

export default function DeleteCompanyForm() {
  return (
    <form>
      <Button variant={'outline'} size={'icon-xs'} className="text-red-500">
        <TrashIcon />
      </Button>
    </form>
  )
}

