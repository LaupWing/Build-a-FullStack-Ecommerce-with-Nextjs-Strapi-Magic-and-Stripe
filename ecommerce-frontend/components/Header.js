import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Header = () => {
   const router = useRouter()
   const isHome = router.pathname === '/'
   return (
      <header>
         <div className={styles.title}>
            <Link href={'/'}>
               <a>
                  <h1>The Ecommerce</h1>
               </a>
            </Link>

         </div>
      </header>
   )
}

export default Header