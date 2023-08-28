import { query as q } from "faunadb";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: { params: { scope: "read:user" } },
    }),
  ],

  jwt: {
    secret: process.env.SIGNING_KEY,
  },

  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const isAllowedToSignIn = true;
      const { email } = user;

      try {
        await fauna.query(q.Create(q.Collection("users"), { data: { email } }));
      } catch (error) {
        return false;
      }

      return isAllowedToSignIn ? true : false;
    },
  },
});
