import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';

const productSchema = z.object({
  title: z.string().min(5),
  image: z.string(),
  price: z.number().min(0),
  description: z.string().optional()
})

const ProductAdd = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(productSchema)
  })

  return (
    <div>
      <form onSubmit={handleSubmit((data=>onAdd(data)))}>
        <h1>Product Add</h1>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input type='text' className='form-control' id='title' {...register('title', { required: true })} />
          {errors.title?.message && <p>{errors.title?.message}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Image</label>
          <input type='text' className='form-control' id='image' {...register('image', { required: true })} />
          {errors.image?.message && <p>{errors.image?.message}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Price</label>
          <input type='number' className='form-control' id='price' {...register('price', { required: true, valueAsNumber:true })} />
          {errors.price?.message && <p>{errors.price?.message}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <input type='text' className='form-control' id='description' {...register('description')} />
          {errors.description?.message && <p>{errors.description?.message}</p>}
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductAdd
