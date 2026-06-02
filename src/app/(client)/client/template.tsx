import { isLoggedIn } from "@/actions/AuthActions";
import { GlobalProps } from "@/types/global-types";

export default async function ClientTemplate({ children }: GlobalProps) {
  await isLoggedIn()
  return (
    <>{children}</>
  )
}

