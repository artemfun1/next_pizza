import  GoogleProvider  from 'next-auth/providers/google';
import  GitHubProvider  from 'next-auth/providers/github';
import NextAuth from "next-auth"
import { prisma } from '@/prisma/prisma-client'
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions = {
  providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_ID || '',
    clientSecret: process.env.GITHUB_SECRET || ''
  }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
  }),
  CredentialsProvider({
    name: "credentials",
    credentials: {
      email: { label: "email", type: "email" },
      password: { label: "password", type: "password" },
    },
    async authorize(credentials) {
      if(!credentials){
        return null;
      }

     const values = {
      email: credentials.email,
     }
     const findUser = await prisma.user.findFirst({
       where:values,
     })
     if(!findUser){
      return null;
     }
    
     const isPasswordValid = await bcrypt.compare(credentials.password, findUser.password)
     if(!isPasswordValid){
      return null;
     }
     return findUser





    }

  })
]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }






