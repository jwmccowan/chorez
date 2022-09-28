import NextAuth from "next-auth";
import type { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import invariant from "tiny-invariant";
import prisma from "../../../lib/prisma";

export const authOptions: NextAuthOptions = {
  callbacks: {
    // this adds the user id to the session
    async session({ session, token }): Promise<Session> {
      if (token && token.sub) {
        return { ...session, user: { ...session.user, id: token.sub } };
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: { email: { type: "text" } },
      async authorize(credentials, req) {
        invariant(credentials, "Must have done credentials");
        const user = await prisma.user.findFirstOrThrow({
          where: { email: credentials.email },
        });
        return user;
      },
    }),
  ],
};
export default NextAuth(authOptions);
