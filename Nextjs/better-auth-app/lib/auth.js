import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db,client } from "./db";
import { nextCookies } from "better-auth/next-js";
export const auth = betterAuth({
  database : mongodbAdapter(db,{client}),

  baseURL : process.env.BETTER_AUTH_URL,
  emailAndPassword :{
      enabled :true,
      minPasswordLength :8,
      maxPasswordLength:128,
      autoSignIn:true
  },
  //konsi authentication
  socialProviders :{
    google : {
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET
    }
  },

  plugins : [nextCookies()]
});






//api/auth/sign-in
//api/auth/sign-out
//api/auth/session
//api/auth/callback/google