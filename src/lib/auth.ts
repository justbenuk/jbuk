import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";

const prisma = new PrismaClient()
export const auth = betterAuth({
  emailAndPassword: { enabled: true },
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  plugins: [
    admin(),
    nextCookies()
  ]
})
