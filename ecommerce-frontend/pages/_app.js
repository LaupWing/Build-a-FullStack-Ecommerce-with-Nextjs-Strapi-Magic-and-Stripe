import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
   return (
      <content>
         <Header/>
         <Component {...pageProps} />
         <Footer/>
      </content>
   )
}

export default MyApp
