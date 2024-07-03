import React from 'react'
import { IProduct } from '../interface/product'

type Props = {
    products:IProduct[]
}

const Home = ({products}: Props) => {
  return (
    <div>
      <h1>San pham ban chay</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Home