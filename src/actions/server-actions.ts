"use server";
import { db } from "@/utils/db";
export async function AddServerAction(
  prevState: { message: string },
  formData: FormData,
) {
  if (!formData) {
    return null;
  }

  const user = await db.user.findUnique({
    where: {
      id: formData.get("userId") as string,
    },
  });

  if (!user) {
    return {
      message: {
        error: "User could not be found",
      },
    };
  }

  try {
    const response = await db.server.create({
      data: {
        userId: user.id,
        title: formData.get("title") as string,
        projectId: formData.get("projectId") as string,
        supplier_name: formData.get("supplier_name") as string,
        supplier_link: formData.get("supplier_link") as string,
        ip_address: formData.get("ip_address") as string,
      },
    });

    if (response) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}
