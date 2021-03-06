import React, { useState } from 'react'
import { addProduct } from '../../api/api'



export default function AddProduct(props) {

    const [user_id, setUser_id] = useState(localStorage.getItem('MyUser'))
    const [title, settitle] = useState('')
    const [detail, setDetail] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)

    const add = async (e) => {
        e.preventDefault()
        let product = {
            user_id: user_id,
            title: title,
            detail: detail,
            stock: stock,
            price: price
        }

        let result = await addProduct(product)
        if (result.status === "success") {
            window.alert("เพิ่มสินค้าเรียบร้อย")
            props.history.push(`/myproduct`)
        }
    }

    return (
        <div >
            <br></br>
            <div style={{ textAlign: "center" }}>
                <h1>AddProduct</h1>
            </div>
            <form onSubmit={add}>
                <div class="form-group">
                    <h5 style={{ color: 'blue' }}>Title</h5>
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <h5 style={{ color: 'blue' }}>Detail</h5>
                    <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} class="form-control" id="detail" aria-describedby="emailHelp" />
                </div>

                <div class="form-group">
                    <h5 style={{ color: 'blue' }}>Stock</h5>
                    <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} class="form-control" id="stock" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <h5 style={{ color: 'blue' }}>Price</h5>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} class="form-control" id="price" aria-describedby="emailHelp" />
                </div>

                <div style={{ textAlign: "center" }}>
                    <button type="submit" class="btn btn-success">
                        Add
          </button><br></br><br></br>
                </div>

            </form>
        </div>
    )
}
