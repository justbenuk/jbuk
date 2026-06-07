import EditCompanyForm from "@/forms/company/EditCompanyForm";
import { CompanyProps } from "@/types/company-types";

export default function CompanyCard({ company }: { company?: CompanyProps | null }) {
  return (
    <div className="p-2 px-6 border rounded-b-2xl">
      <div className="py-4">
        <h1>Company Information</h1>
      </div>
      <EditCompanyForm company={company} />
    </div>
  )
}
