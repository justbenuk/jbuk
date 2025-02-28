import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LucideLogs } from "lucide-react"
import { MENUITEMS } from "@/data/menu-items"
import ResponsiveMenuItem from "./responsive-menu-item"

export default function ResponsiveMenuItems() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" size='icon'>
          <LucideLogs size={48} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetTitle className="hidden">Respoinsive Menu</SheetTitle>
        <div className="flex flex-col items-center justify-center h-full space-y-36 text-3xl uppercase font-semibold">
          {MENUITEMS.map((menuItem, idx) => (
            <ResponsiveMenuItem key={idx} item={menuItem} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
