import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({

    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize(credentials) {
                const res = await axios.post('http://localhost:3000/api/auth/signin', credentials)

                const user = res.data
                
                if(user) {
                    return user
                }else {
                    return null
                }
            },
        }),
    ],

    session:{
        jwt: true,
    },

    jwt: {
        secret: process.env.JWT_TOKEN,
    },
})