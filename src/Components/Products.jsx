import React from 'react'
import ProductCard from './ProductCard'

function Products({products, cartItems, setCartItems}) {
   
  return (
    <div className='flex flex-wrap w-11/12 mx-auto gap-8 py-8'>
  {products.map((items, index) => (
    <div key={index} className='w-52 mx-auto h-96'>
      <ProductCard items={items} cartItems={cartItems} setCartItems={setCartItems} />
      
    </div>
  ))}
</div>
  )
}

export default Products