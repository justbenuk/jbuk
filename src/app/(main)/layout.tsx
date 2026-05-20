import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import { GlobalProps } from "@/types/global-types";

export default function layout({ children }: GlobalProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  )
}

