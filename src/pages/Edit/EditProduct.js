import React ,{ useEffect, useState } from 'react'
import { getAllProduct, editProduct } from "../../api/api";
import EditProductFrom from '../../components/EditProductFrom'

export default function EditProduct(props) {
    const [myproduct, setMyProduct] = useState([])
    
      useEffect(() => {
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
          fetchMyProduct();
      }, []);

      const edit = async (myproduct) => {
        let edit = await editProduct(props.match.params.id, myproduct)
        if (edit.status === "success") {
          props.history.push('/product')
        } else {
          alert(edit.message)
        }
      }

    return (
        <div >
             { myproduct && <EditProductFrom check="Edit" myproduct={myproduct} edit={edit} />}
        </div>
    )
}
