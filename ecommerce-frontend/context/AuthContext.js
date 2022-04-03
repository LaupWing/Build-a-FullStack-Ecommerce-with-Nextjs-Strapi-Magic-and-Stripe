import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import {Magic} from 'magic-sdk'
import { MAGIC_PUBLIC_KEY } from "../utils/urls";

const AuthContext = createContext()

let magic

export const AuthProvider = props =>{

   
   const [user, setUser] = useState(null)
   const router = useRouter()

   const loginUser = async (email) =>{
      try{
         await magic.auth.loginWithMagicLink({email})
         setUser({email})
         router.push('/')
      }catch(err){
         setUser(null)
      }
   }
   
   const logoutUser = async () =>{
      try{
         await magic.user.logout()
         setUser(null)
         router.push('/')
      }catch(e){
         console.log(e)
      }
   }

   useEffect(()=>{
      magic = new Magic(MAGIC_PUBLIC_KEY)
   },[])

   return (
      <AuthContext.Provider value={{
         user,
         loginUser,
         logoutUser
      }}>
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthContext