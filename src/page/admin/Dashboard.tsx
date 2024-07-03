import React from 'react'
import { IProduct } from '../../interface/product'
import { Link } from 'react-router-dom'

type Props = {
  products: IProduct[]
  handleRemove: (id:number) => void
}

const Dashboard = ({ products, handleRemove }: Props) => {
  return (
    <div>
      <h1>Admin</h1>

      <table className='table'>
        <thead className='table-dark'>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.image} />
              </td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/product-edit/${item.id}`} className='btn btn-warning'>
                  Sửa
                </Link>
                <button className='btn btn-danger' onClick={() => handleRemove(Number(item.id))}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/admin/product-add' className='btn btn-primary'>
        Thêm
      </Link>
    </div>
  )
}

export default Dashboard