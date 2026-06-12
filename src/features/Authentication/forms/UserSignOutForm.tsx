import { userSignOut } from "@/actions/AuthActions"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { redirect } from "next/navigation"

export default function UserSignOutForm() {
  async function handleUserSugnOut() {
    await userSignOut()
    redirect('/')
  }
  return (
    <form onSubmit={handleUserSugnOut} className="w-full h-full p-0 m-0">
      <DropdownMenuItem asChild>
        <button className="w-full h-full p-0 m-0">Sign Out</button>
      </DropdownMenuItem>
    </form>
  )
}

