import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import MobileMenuItem from "./mobile-menu-item";

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-2">
          <MobileMenuItem />
        </div>
      </SheetContent>
    </Sheet>
  );
}
