import DashTitle from "@/components/shared/DashTitle";
import { fetchCurrentUser } from "@/actions/AuthActions";
import UserCard from "@/components/pages/client/UserCard";
import CompanyCard from "@/components/pages/client/CompanyCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddCompanyForm from "@/forms/company/AddCompanyForm";
import { Map, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/map";

export default async function ClientPage() {
  const user = await fetchCurrentUser()
  if (!user) return null

  const longitude = Number(user.company?.long)
  const latitude = Number(user.company?.lat)

  return (
    <div className='grid gap-6'>
      <DashTitle title={'Dashboard'} />
      <UserCard user={user} />
      {!user.company ?
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <p>No company information provided</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add Company</Button>
              </DialogTrigger>
              <DialogContent>
                <AddCompanyForm />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        :
        <div className="rounded-2xl overflow-hidden">
          <Map className="h-60" center={[longitude, latitude]} zoom={16} theme="light">
            <MapMarker longitude={longitude} latitude={latitude}>
              <MarkerContent>
                <div className="size-5 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110" />
                <MarkerLabel position="bottom" className="text-white">You are here</MarkerLabel>
              </MarkerContent>
            </MapMarker>
          </Map>
          <CompanyCard company={user.company} />
        </div>
      }
      <div>
      </div>
    </div>
  )
}
