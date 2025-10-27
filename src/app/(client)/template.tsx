import { isLoggedinAction } from "@/features/auth/auth-actions";
import { RootProps } from "@/types";

export default async function ClientTemplate({ children }: RootProps) {
  await isLoggedinAction()
  return (
    <>{children}</>
  )
}

