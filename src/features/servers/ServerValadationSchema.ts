import z from "zod";

export const AddServerSchema = z.object({
  provider: z.string().min(1, "Must provide the name of the provider"),
  providerUrl: z.string().optional(),
  ipAddress: z.string().optional(),
  companyId: z.string(),
  projectId: z.string(),
});
