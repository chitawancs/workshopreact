import React ,{ useState, useEffect } from 'react'
import {getAllProduct} from '../../api/api'
import AllProduct from '../../components/AllProduct'


export default function Products() {
    const [product, setProduct] = useState([])
    

    const fetchProduct = async () => {
      let result = await getAllProduct()
   
      setProduct(result.data)
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div>
               <AllProduct product={product}></AllProduct>
              
        </div>
    )
}
