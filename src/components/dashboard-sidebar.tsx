import Link from "next/link";
import Image from "next/image";
interface DSProps {
  open: boolean;
  setOpen(open: boolean): void;
}

export default function AdminSidebar({ open, setOpen }: DSProps) {
  return (
    <div className="m-2 rounded-xl overflow-x-auto">
      <div
        className={
          !open
            ? "hidden"
            : "block bg-black text-white min-h-full w-72 rounded-xl"
        }
      >
        <div className="pt-4 flex flex-row items-center justify-center gap-4">
          <Image
            src="/images/me.png"
            alt="site logo"
            height={40}
            width={40}
            className="rounded-full"
          />
          <h1 className="uppercase font-bold">Just ben UK</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="w-full text-md font-bold uppercase">
            <Link
              className="block w-full p-2 hover:glass transition-colors duration-300 pl-4"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
          <div className="w-full text-md font-bold uppercase">
            <Link
              className="block w-full p-2 hover:glass transition-colors duration-300 pl-4"
              href="/dashboard/users"
            >
              Users
            </Link>
          </div>
          <div className="w-full text-md font-bold uppercase">
            <Link
              className="block w-full p-2 hover:glass transition-colors duration-300 pl-4"
              href="/dashboard/session"
            >
              Sessions
            </Link>
          </div>
          <div className="w-full text-md font-bold uppercase">
            <Link
              className="block w-full p-2 hover:glass transition-colors duration-300 pl-4"
              href="/dashboard/projects"
            >
              Projects
            </Link>
          </div>
          <div className="w-full text-md font-bold uppercase">
            <Link
              className="block w-full p-2 hover:glass transition-colors duration-300 pl-4"
              href="/dashboard/servers"
            >
              Servers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
