import products from '../../data/products.json'
import { fromImageToUrl } from '../../utils/urls'
const product = products.data[0]

const Product = () =>{
   return (
      <div>
         <h3>{product.attributes.name}</h3>
         <img 
            src={fromImageToUrl(product.attributes.image.data.attributes)}
         />
         <h3>{product.attributes.name}</h3>
         <p>${product.attributes.price}</p>

         <p>
            {product.attributes.content}
         </p>
      </div>
   )
}

export default Product