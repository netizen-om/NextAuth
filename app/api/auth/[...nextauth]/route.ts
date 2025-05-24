import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
            }, 

            async authorize(credentials) { 
                
                const email = credentials?.username; 
                const password = credentials?.password; 

                // const user = await prisma.user.findone({
                //     email,
                //     password
                // })

                
                const user = 1

                if(!user) {
                    return null;
                }

                return {
                    // commented to remove errors
                    // id: user.id,
                    // email : user.email,
                    id : "test123"
                };
            },
        })
    ],
    secret : process.env.NEXTAUTH_URL
})

export const GET = handler
export const POST = handler