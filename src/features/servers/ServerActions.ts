"use server";

import z from "zod";
import { AddServerSchema } from "./ServerValadationSchema";
import { db } from "@/lib/db";

export async function AddServer(values: z.infer<typeof AddServerSchema>) {
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

    return { success: true, message: "Server added" };
  } catch (error) {
    console.error(`Server Error: ${error}`);
    return { success: false, message: "Failed to add server" };
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
