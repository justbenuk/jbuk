import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from './lib/db'
import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth'
import { compareSync } from 'bcrypt-ts-edge'
import { insertLoginSchema } from './lib/validators'


export const config = {
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' }
      },
      authorize: async (credentials) => {

        // check if the form has been filled out
        const validated = insertLoginSchema.parse(credentials)

        const user = await db.user.findFirst({
          where: {
            email: validated.email
          }
        })

        //check if the user is in the db
        if (!user) {
          return {
            success: false,
            message: 'No user found'
          }
        }

        //check if the passwords match
        if (user.password && compareSync(validated.password, user.password)) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        }
        return {
          success: false,
          message: 'Credentials do not match'
        }
      }
    })
  ],
  callbacks: {
    // eslint-disable-next-line
    async session({ session, token }: any) {
      session.user.id = token.sub
      session.user.role = token.role
      session.user.name = token.name
      return session
    },
    // eslint-disable-next-line
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    }
  }
} satisfies NextAuthConfig
export const { handlers, signIn, signOut, auth } = NextAuth(config)
