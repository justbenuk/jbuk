import { fetchCurrentUser } from "@/actions/AuthActions";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddCompanyForm from "@/forms/company/AddCompanyForm";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { FactoryIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EditCompanyForm from "@/forms/company/EditCompanyForm";
import Image from "next/image";
import ClientContainer from "@/components/shared/ClientContainer";
import ClientMap from "@/components/maps/ClientMap";
import ChangePasswordCard from "@/components/pages/client/ChangePasswordCard";

export default async function ClientPage() {
  const user = await fetchCurrentUser()

  if (!user) return null

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 border-b">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center justify-center p-6 gap-2">
            <Image src={user.image || '/assets/profile.png'} alt={user.name} height={150} width={150} className="border-2 border-primary rounded-full" />
            <h1 className="font-semibold text-2xl">{user.name}</h1>
            <span className="text-primary">{user.email}</span>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <ClientMap long={user?.company?.long} lat={user?.company?.lat} />
        </div>
      </div>

      <ClientContainer className="grid gap-10">
        {!user.company ?
          <Card className="p-0">
            <CardHeader className="bg-primary text-muted py-4">
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant={'icon'}>
                    <FactoryIcon />
                  </EmptyMedia>
                  <EmptyTitle>No Company Info</EmptyTitle>
                  <EmptyDescription>We don&apos;t hold any information for your company at the moment</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Add Company</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add your company</DialogTitle>
                      </DialogHeader>
                      <AddCompanyForm />
                    </DialogContent>
                  </Dialog>
                </EmptyContent>
              </Empty>
            </CardContent>
          </Card>
          :
          <Card className="pt-0">
            <CardHeader className="bg-primary text-muted py-4">
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <EditCompanyForm company={user.company} />
            </CardContent>
          </Card>
        }
        <ChangePasswordCard />
      </ClientContainer>
      <div>
      </div>
    </div>
  )
}
