import { userSignOut } from "@/actions/AuthActions"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { redirect } from "next/navigation"

export default function UserSignOutForm() {
  async function handleUserSugnOut() {
    await userSignOut()
    redirect('/')
  }
  return (
    <form onSubmit={handleUserSugnOut}>
      <DropdownMenuItem asChild>
        <button>Sign Out</button>
      </DropdownMenuItem>
    </form>
  )
}

