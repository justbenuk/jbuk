"use server";

import z from "zod";
import { AddServerSchema } from "./ServerValadationSchema";
import { db } from "@/lib/db";
import { isAdmin } from "../Authentication/AuthenticationActions";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function AddServer(values: z.infer<typeof AddServerSchema>) {
  await isAdmin();
  try {
    const validated = AddServerSchema.parse(values);

    await db.server.create({
      data: {
        provider: validated.provider,
        providerUrl: validated.providerUrl || "",
        ipAddress: validated.ipAddress || "",
        companyId: validated.companyId,
        projectId: validated.projectId,
      },
    });
    revalidatePath("/dashboard/servers");
    return { success: true, message: "Server added" };
  } catch (error) {
    throw new Error(`Add Server: ${error}`);
  }
}

export async function FetchAllServers() {
  try {
    const data = await db.server.findMany({
      include: {
        project: true,
        company: true,
      },
    });
    return { success: true, data };
  } catch (error) {
    throw new Error(`Server Error: ${error}`);
  }
}

export async function DeleteServerById(id: string) {
  await isAdmin();
  await db.server.delete({
    where: { id },
  });
  revalidatePath("/dashboard/servers");
  return { success: true };
}

export async function FetchServerById(id: string) {
  try {
    await isAdmin();
    const data = await db.server.findFirst({
      where: { id },
      include: {
        project: true,
        company: true,
      },
    });

    return { success: true, data };
  } catch (error) {
    throw new Error(`Fetch Error: ${error}`);
  }
}

export async function EditServer(
  values: z.infer<typeof AddServerSchema>,
  id: string,
) {
  try {
    await isAdmin();
    const validated = AddServerSchema.parse(values);

    await db.server.update({
      where: { id },
      data: {
        provider: validated.provider,
        providerUrl: validated.providerUrl,
        ipAddress: validated.ipAddress,
        companyId: validated.companyId,
        projectId: validated.projectId,
      },
    });
    revalidatePath("/dashboard/servers");
    return { success: true };
  } catch (error) {
    throw new Error(`Update Server: ${error}`);
  }
}
