import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
interface UIProps {
  userimage: string;
  role: string;
}
export default function AvvatarDropdown({ userimage, role }: UIProps) {
  return (
    <div className="p-0 m-auto">
      <div className="dropdown dropdown-left">
        <div tabIndex={0} role="button">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <Image
                src={userimage}
                alt="User Profile Picture"
                height={30}
                width={30}
              />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-10 w-52 p-2 shadow"
        >
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          {role === "Admin" && (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <form>
              <button onClick={() => signOut()} className="text-red-500">
                Logout
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
