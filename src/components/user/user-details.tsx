import { fetchUser } from "@/actions/user-actions";
import { auth } from "@/utils/auth";

export default async function UserDetails() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.image}</p>
      </div>
      <div>{user.accounts[0].provider}</div>
      <div>{user.servers.length}</div>
      <div>{user.projects.length}</div>
    </div>
  );
}
