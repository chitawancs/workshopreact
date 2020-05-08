import React from 'react'
import { Link } from "react-router-dom";
export default function MyProduct(props) {
  return (
    <div>
      <h1>My Products</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">product_id</th>
            <th scope="col">user_id</th>
            <th scope="col">title</th>
            <th scope="col">detail</th>
            <th scope="col">stock</th>
            <th scope="col">price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {
            props.my_product.map((item, index) => (
              <tr key={item, index}>
                <th scope="row">{index + 1}</th>
                <td >{item._id}</td>
                <td>{item.user_id}</td>
                <td>{item.title}</td>
                <td>{item.detail}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>

                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/product/edit/${item._id}`}
                  >
                    Edit
                  </Link>
                  <br></br> <span onClick={() => props.delete(item._id)} style={{ color: "red", cursor: 'pointer' }}>Delete</span>

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
