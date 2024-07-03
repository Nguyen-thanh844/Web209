import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'
// import Admin from './page/admin'
import Header from './components/header'
import Footer from './components/footer'
import { IProduct } from './interface/product'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import Dashboard from './page/admin/Dashboard'
import Notfound from './page/Notfound'
import instance from './apis'
import ProductAdd from './page/admin/ProductAdd'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    (async () => {
      try {
        const{data} = await instance.get("/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  },[]);
  const handleRemove = async (id: any) => {
		if (confirm('Ban chac chua?')) {
			await instance.delete(`/products/${id}`)
			setProducts(products.filter((item) => item.id !== id))
		}
	}
  const handleSubmit = (data) => {
    (async () => {
      try {
        const res = await instance.post("/products", data)
        console.log(res.data);
        setProducts([...products, res.data]);
      } catch (error) {
        console.log(error)
      }
    })();
  };
  return (
    <>
      <Header />
      <main id='main' className='container'>
        <Routes>
          {/* Client */}
          <Route index element={<Home products={products} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* Admin */}
          <Route path='/admin' element={<Dashboard products={products} handleRemove={handleRemove} />} />
          <Route path='/admin/product-add' element={<ProductAdd onAdd={handleSubmit}/>} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
