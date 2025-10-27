import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

const createPrismaClient = () => {
  return new PrismaClient().$extends(withAccelerate())
}

export const db = globalForPrisma.prisma ?? (globalForPrisma.prisma = createPrismaClient())
