import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GitHub from "next-auth/providers/github";
import NextAuth, { type DefaultSession } from "next-auth";

// Extend the built-in session with custom properties
// See https://authjs.dev/guides/role-based-access-control
// See https://authjs.dev/getting-started/typescript
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on
   * the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /**
       * The number of requests the user can make to the API.
       */
      apiLimit: number;
      /**
       * By default, TypeScript merges new interface properties and overwrites
       * existing ones. In this case, the default session user properties will
       * be overwritten, with the new ones defined above. To keep the default
       * session user properties, you need to add them back into the newly
       * declared interface.
       */
    } & DefaultSession["user"];
  }
}

// Extend the built-in user with our custom properties
declare module "@auth/core/adapters" {
  interface AdapterUser {
    apiLimit?: number;
  }
}

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, user }) {
      // @ts-ignore: Auth.js type error bug: https://github.com/nextauthjs/next-auth/issues/11916
      session.user.apiLimit = user.apiLimit ?? 5;
      return session;
    },
  },
});
