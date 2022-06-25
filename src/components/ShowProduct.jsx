import React from 'react'
import { useSelector } from 'react-redux/es/exports'

const ShowProduct = () => {
  const { title, price} = useSelector( state =>  state.product)
  
  return (
    <div className='box mt-5'>
      <h4 className='title is-4'>Title: {title}</h4>
      <h4 className='title is-4'>Price: {price}</h4>
    </div>
  )
}

export default ShowProduct