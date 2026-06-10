import { UserProps } from "@/types/user-types";
import Image from "next/image"
import ProfilePictureUploadButton from "./ProfilePictureUploadButton";
import { imageSrc } from "@/lib/utils";

export default function UserCard({ user }: { user: UserProps }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-2">
      <Image src={imageSrc(user.image)} alt={user.name} height={150} width={150} className="border-2 border-primary rounded-full h-38" />
      <ProfilePictureUploadButton />
      <h1 className="font-semibold text-2xl">{user.name}</h1>
      <span className="text-primary">{user.email}</span>
    </div>
  )
}
