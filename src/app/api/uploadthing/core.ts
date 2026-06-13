import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError, UTApi } from "uploadthing/server";
import z from "zod";

const f = createUploadthing();

export const utapi = new UTApi();

export const ourFileRouter = {
  NewCompanyPictureUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const session = await auth.api.getSession({
        headers: await headers(),
      });
      if (!session) throw new UploadThingError("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const image = await db.media.create({
        data: {
          key: file.key,
          url: file.ufsUrl,
          name: file.name,
          size: file.size,
          mimeType: file.type,
          type: "IMAGE",
          uploadedById: metadata.userId,
        },
      });

      return {
        mediaId: image.id,
        url: image.url,
      };
    }),
  CompanyPictureUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(z.object({ companyId: z.string().min(1) }))
    .middleware(async ({ input }) => {
      const session = await auth.api.getSession({
        headers: await headers(),
      });
      if (!session) throw new UploadThingError("Unauthorized");

      const company = await db.company.findUnique({
        where: {
          id: input.companyId,
        },
      });

      if (!company) {
        throw new UploadThingError("Company not found");
      }

      if (company.userId !== session.user.id && session.user.role !== "admin") {
        throw new UploadThingError("Unauthorized");
      }

      return {
        userId: session.user.id,
        companyId: company.id,
        oldImage: company.image,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const newImage = await db.media.create({
        data: {
          key: file.key,
          url: file.ufsUrl,
          name: file.name,
          size: file.size,
          mimeType: file.type,
          type: "IMAGE",
          uploadedById: metadata.userId,
          companyId: metadata.companyId,
        },
      });

      await db.company.update({
        where: {
          id: metadata.companyId,
        },
        data: {
          image: newImage.url,
        },
      });

      if (metadata.oldImage) {
        const oldMedia = await db.media.findFirst({
          where: {
            OR: [{ id: metadata.oldImage }, { url: metadata.oldImage }],
          },
        });

        if (oldMedia) {
          await utapi.deleteFiles(oldMedia.key);

          await db.media.delete({
            where: {
              id: oldMedia.id,
            },
          });
        }
      }

      revalidatePath("/client");
      revalidatePath("/dashboard/companies");

      return {
        mediaId: newImage.id,
        url: newImage.url,
      };
    }),
  ProfilePictureUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const session = await auth.api.getSession({
        headers: await headers(),
      });
      if (!session) throw new UploadThingError("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const user = await db.user.findUnique({
        where: {
          id: metadata.userId,
        },
      });

      if (!user) {
        throw new UploadThingError("User not found");
      }

      const oldImage = user.image;

      const newImage = await db.media.create({
        data: {
          key: file.key,
          url: file.ufsUrl,
          name: file.name,
          size: file.size,
          mimeType: file.type,
          type: "IMAGE",
          uploadedById: user.id,
        },
      });

      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          image: newImage.url,
        },
      });

      if (oldImage) {
        const oldMedia = await db.media.findFirst({
          where: {
            OR: [{ id: oldImage }, { url: oldImage }],
          },
        });

        if (!oldMedia) {
          return {
            mediaId: newImage.id,
            url: newImage.url,
          };
        }

        await utapi.deleteFiles(oldMedia.key);

        await db.media.delete({
          where: {
            id: oldMedia.id,
          },
        });
      }
      revalidatePath("/client");
      return {
        mediaId: newImage.id,
        url: newImage.url,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
