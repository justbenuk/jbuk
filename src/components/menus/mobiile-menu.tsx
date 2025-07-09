import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { SITEMENUITEMS } from "@/data/site-menu-items";
import MobileMenuItems from "./mobile.menu-items";

export default function MobileMenu() {
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <FaBars />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="px-6 flex flex-col items-start gap-10">
            {SITEMENUITEMS.map((item, idx) => (
              <MobileMenuItems key={idx} item={item} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

