import Head from 'next/head'
import { twoDecimals } from '../../utils/format'
import { API_URL, fromImageToUrl } from '../../utils/urls'

const Product = ({product}) =>{
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
   const products_res = await fetch(`${API_URL}/api/products`)
   const products = await products_res.json()
   
   return {
      paths: products.data.map(product=>({
         params: {
            slug: String(product.attributes.slug)
         }
      })),
      fallback: false
   }
}

export async function getStaticProps({params:{ slug}}){
   const product_res = await fetch(`${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`)
   const product = await product_res.json()
   
   return{
      props:{
         product: product.data[0]
      }
   }
}