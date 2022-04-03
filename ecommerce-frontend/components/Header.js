import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import AuthContext from '../context/AuthContext'

const Header = () => {
   const router = useRouter()
   const isHome = router.pathname === '/'
   const {user} = useContext(AuthContext)

   const goBack = (event)=>{
      event.preventDefault()
      router.back()
   }

   return (
      <header className={styles.nav}>
         {!isHome && <button onClick={goBack}> {'<'} Back</button>}
         <div className={styles.title}>
            <Link href={'/'}>
               <a>
                  <h1>The Ecommerce</h1>
               </a>
            </Link>
         </div>

         <div className={styles.auth}>
            {user ? (
               <Link href={'/account'}>
                  <a>
                     {user.email}
                  </a>
               </Link>
            ) : (
               <Link href={'/login'}>
                  <a>
                     Log in
                  </a>
               </Link>
            ) }
         </div>
      </header>
   )
}

export default Header