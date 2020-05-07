import React , { useState, useEffect }from 'react'
import {editProduct} from '../api/api'

export default function EditProductFrom(props) {
   
    const [user_id, setUser_id] = useState('5eb142174b35ac0011bb35e7')
    const [title, settitle] = useState('')
    const [detail, setDetail] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)

    const edit = async (e) => {
        e.preventDefault()
        let product = {
            user_id: user_id,
            title: title,
            detail: detail,
            stock: stock,
            price: price
        }
        props.edit(product)
    
    }
    useEffect(() => {
        if (props.check === "Edit") {
        setUser_id(props.product.user_id)
        settitle(props.product.title)
        setDetail(props.product.detail)
        setStock(props.product.stock)
        setPrice(props.product.price)
        }
      }, [])

    return (
        <div >
            <br></br>
            <div style={{ textAlign: "center" }}>
                <h1>EditProductFrom</h1>
            </div>
            <form onSubmit={edit}>
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
                        Submit
          </button><br></br><br></br>
                </div>

            </form>
        </div>
    )
}
