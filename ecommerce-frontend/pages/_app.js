import Footer from '../components/Footer'
import Header from '../components/Header'
import { AuthProvider } from '../context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
   return (
      <AuthProvider>
         <content>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
         </content>
      </AuthProvider>
   )
}

export default MyApp
