'use client'

import { UploadButton } from "@/lib/uploadthing"
import { CameraIcon } from "lucide-react"
import { toast } from "sonner"

export default function ProfilePictureUploadButton() {
  return (
    <UploadButton
      endpoint='ProfilePictureUploader'
      appearance={{
        container: 'relative -top-8 left-10 w-auto -mb-5',
        button:
          'h-10 w-auto rounded-md border bg-primary text-primary-foreground dark:bg-primary px-6',
        allowedContent: 'hidden',
      }}
      content={{
        button({ ready, isUploading }) {
          if (!ready) return null
          if (isUploading) return '...'
          return <CameraIcon className="h-4 w-4" />
        },
      }}
      onClientUploadComplete={(res) => {
        console.log(res)
      }}
      onUploadError={(error: Error) => {
        console.error(error)
        toast.error('failed to upload image')
      }}
    />
  )
}

