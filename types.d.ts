import NextAuth, { type DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    role: "Client" | "Admin";
  }

  interface Session {
    user: {
      role: "Client" | "Admin";
    } & DefaultSession["user"];
  }
}
