import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: { params: { scope: "read:user, user:email" } },
    }),
  ],

  // jwt: {
  //   secret: process.env.SIGNING_KEY,
  // },

  // callbacks: {
  //   async session(session) {
  //     const userActiveSubscription = await fauna.query(
  //       q.Get(q.Match(q.Index("subscription_by_user_ref")))
  //     );

  //     return session;
  //   },
  //   async signIn({ user, account, profile, credentials }) {
  //     const isAllowedToSignIn = true;
  //     const { email } = user;

  //     try {
  //       // await fauna.query(
  //       //   q.If(
  //       //     q.Not(
  //       //       q.Exists(
  //       //         q.Match(q.Index("user_by_email"), q.Casefold(user.email!))
  //       //       )
  //       //     ),
  //       //     q.Create(q.Collection("users"), { data: { email } }),
  //       //     q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email!)))
  //       //   )
  //       // );
  //     } catch (error) {
  //       console.log(error);

  //       return false;
  //     }

  //     return isAllowedToSignIn ? true : false;
  //   },
  // },
});
