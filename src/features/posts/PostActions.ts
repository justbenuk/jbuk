"use server";
import { db } from "@/lib/db";
import z from "zod";
import { PostSchema } from "./PostSchema";
import { isAdmin } from "../Authentication/AuthenticationActions";
import slugify from "slugify";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { utapi } from "@/app/api/uploadthing/core";
import { revalidatePath } from "next/cache";

export async function FetchAllPosts() {
  try {
    const data = await db.post.findMany({
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, data };
  } catch (error) {
    throw new Error(`Post Error: ${error}`);
  }
}

export async function AddPostAction(values: z.infer<typeof PostSchema>) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) return "Unauthorised";
    await isAdmin();
    const validated = PostSchema.parse(values);

    await db.post.create({
      data: {
        title: validated.title,
        slug: slugify(validated.title, {
          lower: true,
        }),
        image: validated.image,
        excerpt: validated.excerpt,
        content: validated.content,
        userId: session.user.id,
        featured: validated.featured,
        published: validated.published,
      },
    });
    return { success: true };
  } catch (error) {
    throw new Error(`Post Error: ${error}`);
  }
}

export async function FetchPostById(id: string) {
  try {
    const data = await db.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
    return { success: true, data };
  } catch (error) {
    throw new Error(`Post Error: ${error}`);
  }
}

export async function UpdatePostAction(
  values: z.infer<typeof PostSchema>,
  postImage: string,
  id: string,
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) return "Unauthorised";
    await isAdmin();
    const validated = PostSchema.parse(values);

    const existingImage = postImage !== validated.image;

    if (existingImage) {
      const oldImage = await db.media.findFirst({
        where: {
          url: postImage,
        },
      });

      if (!oldImage) throw new Error("Image delete went wrong");

      utapi.deleteFiles(oldImage.key);

      await db.media.delete({
        where: { id: oldImage.id },
      });
    }

    await db.post.update({
      where: { id },
      data: {
        title: validated.title,
        slug: slugify(validated.title, {
          lower: true,
        }),
        image: validated.image,
        excerpt: validated.excerpt,
        content: validated.content,
        userId: session.user.id,
        featured: validated.featured,
        published: validated.published,
      },
    });
    revalidatePath("/dasboard/posts");
    return { success: true };
  } catch (error) {
    throw new Error(`Post Error: ${error}`);
  }
}

export async function DeletePostById(id: string) {
  try {
    await isAdmin();

    //get the original post
    const post = await db.post.findUnique({
      where: { id },
    });

    if (!post) throw new Error("Failed to fetch post");

    //delete the image form the db
    const image = await db.media.findFirst({
      where: {
        url: post.image,
      },
    });

    if (!image) throw new Error("Failed to find image");

    await db.media.delete({
      where: {
        id: image.id,
      },
    });

    //delete from upload thing to save space
    utapi.deleteFiles(image.key);

    //Delete the post
    await db.post.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    throw new Error(`Post Delete: ${error}`);
  }
}
