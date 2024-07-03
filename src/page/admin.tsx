import { IProduct } from '../interface/product'

type Props = {
  products: IProduct[]
}

const Admin = ({ products }: Props) => {
  return (
    <div>
      <h2>Danh sách sản phẩm </h2>
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
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.image} />
              </td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button className='btn btn-success'>Sửa</button>
                <button className='btn btn-danger'>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Admin
