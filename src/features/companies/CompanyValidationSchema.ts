import z from "zod";

export const CompanySchema = z.object({
  name: z.string().min(1, "Please provide your company name"),
  image: z.string().optional(),
  email: z.string().min(1, "Please provide the company email"),
  contactNumber: z.string().min(1, "Please provide the main contact number"),
  emergencyContact: z
    .string()
    .min(1, "Please provide an emergency contact number"),
  address: z.string().optional(),
  domain: z.string().optional(),
  long: z.string().optional(),
  lat: z.string().optional(),
});
