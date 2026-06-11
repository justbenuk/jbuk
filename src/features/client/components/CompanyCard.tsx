import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import EditCompanyForm from "../forms/EditCompanyForm"
import { CompanyProps } from "../ClientTypes"

export default function CompanyCard({ company }: { company: CompanyProps }) {
  return (
    <Card className="grid gap-6">
      <CardHeader>
        <CardTitle>Company Profile</CardTitle>
        <CardDescription>Company Information</CardDescription>
      </CardHeader>
      <CardContent>
        <EditCompanyForm company={company} />
      </CardContent>

    </Card>
  )
}

