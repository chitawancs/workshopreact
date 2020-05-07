import React ,{ useState, useEffect } from 'react'
import {getAllProduct} from '../../api/api'
import AllProduct from '../../components/AllProduct'
import MyProduct from '../../components/MyProduct'

export default function Products() {
    const [product, setProduct] = useState([])
    const [myproduct, setMyProduct] = useState([])

    const fetchProduct = async () => {
      let result = await getAllProduct()
   
      setProduct(result.data)
    }
    const fetchMyProduct = async () => {
        let result = await getAllProduct()
        let allproduct_arr = result

        var myproduct_arr = []
        setMyProduct(result.data)
        for (var i = 0; i < allproduct_arr.data.length; i++) {
            if (allproduct_arr.data[i].user_id ==="5eb142174b35ac0011bb35e7") {
                myproduct_arr.push(allproduct_arr.data[i])     
            }
          }
        setMyProduct(myproduct_arr)
      
      }
  
    useEffect(() => {
        fetchProduct()
        fetchMyProduct()
    }, [])
    return (
        <div>
               <AllProduct product={product}></AllProduct>
               <MyProduct myproduct={myproduct}></MyProduct>
        </div>
    )
}
