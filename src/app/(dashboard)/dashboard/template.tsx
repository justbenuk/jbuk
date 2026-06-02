import { isAdmin } from "@/actions/AuthActions";
import { GlobalProps } from "@/types/global-types";

export default async function AuthTemplate({ children }: GlobalProps) {
  await isAdmin()
  return (
    <>{children}</>
  )
}

