import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_iD,
      clientSecret: process.env.GOOGLE_CLIENT_SECERT,
    }),
  ],
});

export {handler as GET , handler as POST}