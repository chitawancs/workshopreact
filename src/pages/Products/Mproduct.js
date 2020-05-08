import React,{ useState, useEffect } from 'react'
import MyProduct from '../../components/MyProduct'
import {getAllProduct,deleteProduct} from '../../api/api'
export default function Mproduct(props) {
    
    const [my_product, setMyProduct] = useState([])
    const fetchMyProduct = async () => {
        let result = await getAllProduct()
        let allproduct_arr = result
        var myproduct_arr = []
        
        setMyProduct(result.data)
        for (var i = 0; i < allproduct_arr.data.length; i++) {
            if (allproduct_arr.data[i].user_id ===localStorage.getItem('MyUser')) {
                myproduct_arr.push(allproduct_arr.data[i])     
            }
          }
        setMyProduct(myproduct_arr)
      }
      const removeMyProduct = async (id) => {
        let check = window.confirm("คุณต้องการลบหรือไม่ ?")
         if(check === true) {
           let result = await deleteProduct(id)
           console.log(result)
           if (result.status === "success") {
            fetchMyProduct()
           }
         }
       }
  
    useEffect(() => {
        fetchMyProduct()
    }, [])
    return (
        <div>
        <MyProduct my_product={my_product} delete={removeMyProduct}></MyProduct>
        </div>
    )
}
