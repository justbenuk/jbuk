import type { Prisma } from "@prisma/client";

export type ServerProps = Prisma.ServerGetPayload<{
  include: {
    company: true;
    project: true;
  };
}>;
