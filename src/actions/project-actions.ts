"use server";
import { db } from "@/utils/db";
export async function AddProjectAction(
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
    const response = await db.project.create({
      data: {
        userId: user.id,
        github_url: formData.get("github_url") as string,
        project_url: formData.get("project_url") as string,
      },
    });

    if (response) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}
