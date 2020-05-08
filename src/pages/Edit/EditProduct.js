import React ,{ useEffect, useState } from 'react'
import { getAllProduct, editProduct } from "../../api/api";
import EditProductFrom from '../../components/EditProductFrom'

export default function EditProduct(props) {
  const [myproduct, setMyProdust] = useState();

  useEffect(() => {
    const fetchMyProduct = async () => {
      await getAllProduct().then((res) => {
        let arr = res.data.filter((item) => {
          return item._id === props.match.params.id;
        });
        setMyProdust(arr[0]);
        console.log(arr)
      });
    };
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
