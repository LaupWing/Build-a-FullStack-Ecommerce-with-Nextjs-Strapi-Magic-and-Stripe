import Head from 'next/head'
// import products from '../../data/products.json'
import { twoDecimals } from '../../utils/format'
import { API_URL, fromImageToUrl } from '../../utils/urls'
// const product = products.data[0]

const Product = ({product}) =>{
   console.log(product)
   return (
      <div>
         {/* <Head>
            {product.data.attributes.meta_title && 
               <title>{product.data.attributes.meta_title}</title>
            }
            {product.data.attributes.meta_description && 
               <meta name='description' content={product.data.attributes.meta_description}/>
            }
         </Head>
         <h3>{product.data.attributes.name}</h3>
         <img 
            src={fromImageToUrl(product.data.attributes.image.data.attributes)}
         />
         <h3>{product.data.attributes.name}</h3>
         <p>${twoDecimals(product.data.attributes.price)}</p>

         <p>
            {product.data.attributes.content}
         </p> */}
      </div>
   )
}

export default Product

export async function getStaticPaths(){
   const products_res = await fetch(`${API_URL}/api/products?populate=*`)
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
   console.log(slug)
   const product_res = await fetch(`${API_URL}/api/product?slug=${slug}`)
   const product = await product_res.json()
   console.log(product.data)
   
   return{
      props:{
         product
      }
   }
}