import Image from "next/image";

interface UIProps {
  userimage: string;
}
export default function AvvatarDropdown({ userimage }: UIProps) {
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
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
