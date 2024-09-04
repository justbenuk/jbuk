"use server";
import { db } from "@/utils/db";

//get all projects
export async function AllProjectsAction({
  offset = 1,
  limit = 1,
}: {
  offset?: number;
  limit?: number;
}) {
  //building the pagination
  const data = await db.project.findMany({
    skip: offset,
    take: limit,
  });

  const totalCount = await db.project.count();

  const totalPages = Math.ceil(totalCount / limit);

  return { data, totalCount, totalPages };
}

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
        title: formData.get("title") as string,
        domain: formData.get("domain") as string,
        project_type: formData.get("project_type") as string,
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
