import { isAdminAction } from "@/features/auth/auth-actions"
import { RootProps } from "@/types"

export default async function DashboardTemplate({ children }: RootProps) {
  await isAdminAction()
  return (
    <>{children}</>
  )
}

