import React from 'react'

export default function AllProduct(props) {
  return (
    <div>
      <h1>All Products</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            {/* <th scope="col">product_id</th>
            <th scope="col">user_id</th> */}
            <th scope="col">title</th>
            <th scope="col">detail</th>
            <th scope="col">stock</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {
            props.product.map((item, index) => (
              <tr key={item, index}>
                <th scope="row">{index + 1}</th>
                {/* <td >{item._id}</td>
              <td >{item.user_id}</td> */}
                <td>{item.title}</td>
                <td>{item.detail}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
