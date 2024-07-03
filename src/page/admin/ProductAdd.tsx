import React from 'react'
import { useForm } from 'react-hook-form';


const ProductAdd = ({onAdd}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data)=>{
    console.log(data);
    onAdd(data);
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Product Add</h1>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input type='text' className='form-control' id='title'{...register("title",{required:true})}/>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Price</label>
          <input type='number' className='form-control'id='price'{...register("price",{required:true})} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <input type='text' className='form-control' id='description'{...register("description")}/>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductAdd