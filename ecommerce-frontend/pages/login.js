import React, { useContext, useState } from 'react'
import Head from 'next/head'
import AuthContext from '../context/AuthContext'
import styles from '../styles/Login.module.css'

const Login = () => {
   const {loginUser} = useContext(AuthContext)
   const [email, setEmail] = useState('')

   const handleSubmit = event =>{
      event.preventDefault()
      loginUser(email)
   } 

   return (
      <div>
         <Head>
            <title>Login</title>
            <meta name='description' content='Login here to make your purchase'/>
         </Head>

         <h2>Login</h2>
         <form onSubmit={handleSubmit}>
            <input 
               className={styles.input}
               type="email"
               value={email}
               onChange={event => setEmail(event.target.value)}
               placeholder='Email Address'
            />
            <button 
               type="submit"
               className={styles.button}
            >Login</button>
         </form>
      </div>
   )
}

export default Login