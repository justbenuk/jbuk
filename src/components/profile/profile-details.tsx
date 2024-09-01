import { fetchUser } from "@/actions/user-actions";
import { auth } from "@/utils/auth";
import Image from "next/image";
import ProjectTables from "./project-tables";
import ServerTables from "./server-tables";

export default async function ProfileDetails() {
  //get the user id first
  const session = await auth();

  //get the user ffrom the db
  const user = await fetchUser(session?.user.id as string);

  //check if we have a user returned
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[50dvh]">
        <h1 className="text-3xl font-bold">Sorry! Could not find the user</h1>
        <p>If you beleive this is an error, Please contact ben@justben.uk</p>
      </div>
    );
  }
  return (
    <div className="w-full pb-24">
      <h1 className="font-bold text-lg">Client Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-purple-100/80 rounded-lg mt-4 p-4">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-start gap-4 text-center">
          <Image
            src={user.image as string}
            alt="Client Profile Pic"
            height={50}
            width={50}
          />
          <div className="text-sm flex flex-col items-start justify-center">
            <p className="text-xs">Client Name</p>
            <p className="font-bold">{user.name}</p>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2 text-sm flex flex-col xl:flex-row justify-center items-center xl:justify-evenly lg:items-start xl:items-center gap-3">
          <div className="text-center lg:text-start">
            <p className="text-xs">Contact Email</p>
            <p className="font-bold">{user.email}</p>
          </div>
          <div className="text-center lg:text-start">
            <p className="text-xs">Account Provider</p>
            <p className="font-bold">{user.accounts[0].provider}</p>
          </div>
        </div>
        <div className="text-sm flex flex-col xl:flex-row items-center justify-center md:justify-evenly">
          <p className="text-xs">Number of Projects</p>
          <p className="font-bold">{user.projects.length}</p>
        </div>
        <div className="text-sm flex flex-col xl:flex-row items-center justify-center md:justify-evenly">
          <p className="text-xs">Number of Servers</p>
          <p className="font-bold">{user.servers.length}</p>
        </div>
      </div>
      <div className="mt-6">
        <ProjectTables userProjects={user.projects} />
      </div>
      <div className="mt-6">
        <ServerTables userServers={user.servers} />
      </div>
    </div>
  );
}
