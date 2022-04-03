import Head from 'next/head'
import products from '../../data/products.json'
import { twoDecimals } from '../../utils/format'
import { API_URL, fromImageToUrl } from '../../utils/urls'
const product = products.data[0]

const Product = () =>{
   return (
      <div>
         <Head>
            {product.attributes.meta_title && 
               <title>{product.attributes.meta_title}</title>
            }
            {product.attributes.meta_description && 
               <meta name='description' content={product.attributes.meta_description}/>
            }
         </Head>
         <h3>{product.attributes.name}</h3>
         <img 
            src={fromImageToUrl(product.attributes.image.data.attributes)}
         />
         <h3>{product.attributes.name}</h3>
         <p>${twoDecimals(product.attributes.price)}</p>

         <p>
            {product.attributes.content}
         </p>
      </div>
   )
}

export default Product

export async function getStaticPaths(){
   const products_res = await fetch(`${API_URL}/api/products?populate=*`)
   const products = await products_res.json()

   return {
      paths: products.map(product=>({
         params: {
            slug: String(product.slug)
         }
      })),
      fallback: false
   }
}

export async function getStaticProps(){

}