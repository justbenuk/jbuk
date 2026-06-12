import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError, UTApi } from "uploadthing/server";

const f = createUploadthing();

export const utapi = new UTApi()

export const ourFileRouter = {
  CompanyPictureUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const session = await auth.api.getSession({
        headers: await headers()
      })
      if (!session) throw new UploadThingError("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {

    }),
  ProfilePictureUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const session = await auth.api.getSession({
        headers: await headers()
      })
      if (!session) throw new UploadThingError("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {

      const user = await db.user.findUnique({
        where: {
          id: metadata.userId
        }
      })

      if (!user) {
        throw new UploadThingError('User not found')
      }

      const oldImage = user.image

      const newImage = await db.media.create({
        data: {
          key: file.key,
          url: file.ufsUrl,
          name: file.name,
          size: file.size,
          mimeType: file.type,
          type: 'IMAGE',
          uploadedById: user.id
        }
      })

      await db.user.update({
        where: {
          id: user.id
        },
        data: {
          image: newImage.url
        }
      })

      if (oldImage) {
        const oldMedia = await db.media.findFirst({
          where: {
            OR: [
              { id: oldImage },
              { url: oldImage },
            ]
          }
        })

        if (!oldMedia) {
          return {
            mediaId: newImage.id,
            url: newImage.url
          };
        }

        await utapi.deleteFiles(oldMedia.key)

        await db.media.delete({
          where: {
            id: oldMedia.id
          }
        })
      }
      revalidatePath(('/client'))
      return {
        mediaId: newImage.id,
        url: newImage.url
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
