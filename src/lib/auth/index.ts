import { PrismaAdapter } from "@auth/prisma-adapter"
import { UserRole } from "@prisma/client"
import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { getUserById } from "@/lib/auth/db/user"
import { db } from "@/lib/db"
// import { env } from "@/../.env.mjs"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: 'ssss', // env.AUTH_SECRET,
  pages: {
    signIn: "/login",
    newUser: "/dashboard",
    error: "/error",
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Google({
      // clientId: env.GOOGLE_CLIENT_ID,
      // clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      // clientId: env.GITHUB_CLIENT_ID,
      // clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials.username === 'admin' && credentials.password === 'admin') {
          const user = {
            id: "1",
            name: credentials.username,
            role: 'admin'
          }
          return user
        }
        return null

        // const { email, password, customField } = credentials;
        // // 在这里可以进行自定义的验证逻辑，例如查询数据库
        // const user = await customAuthenticate(email, password, customField);
        // if (user) {
        //     return user;
        // } else {
        //     return null;
        // }
        // 其中customAuthenticate是一个自定义的函数，
        // 用于根据传入的email、password和customField进行验证。
        // 这个函数可以是查询数据库、调用 API 等操作来验证用户的身份和自定义字段是否符合要求。
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) {
        return token
      }

      const existingUser = await getUserById(token.sub)

      if (!existingUser) {
        return token
      }

      token.role = existingUser.role
      token.createdAt = existingUser.createdAt

      return token
    },
    async session({ session, token }) {
      if (token) {
        if (token.sub && session.user) {
          session.user.id = token.sub
        }

        if (token.role && session.user) {
          session.user.role = token.role as UserRole
        }

        if (token.createdAt && session.user) {
          session.user.createdAt = token.createdAt as Date
        }
      }

      return session
    },
    async authorized({ request, auth }) {
      const url = request.nextUrl
      const user = auth?.user;
      
      if (url.pathname.startsWith('/admin') && !user) {
        return false
      }
  
      return true
    },
  },
})

export async function getSessionOrThrow(message?: string) {
  const session = await auth()

  if (!session) {
    throw new Error(message || "Unauthorized")
  }

  return session
}

// message?: string
export async function getIsAdmin() {
  // const session = await auth()

  // if (!session) {
  //   throw new Error(message || "Unauthorized")
  // }

  // return session.user.role === "ADMIN"
  return true
}
