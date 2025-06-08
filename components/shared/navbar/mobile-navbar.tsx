import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import MobileMenuItem from "./mobile-menu-item";
export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger className="absolute top-5 right-5">
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <MobileMenuItem />
      </SheetContent>
    </Sheet>
  )
}

