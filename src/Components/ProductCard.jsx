import React from 'react'

function ProductCard({items, cartItems, setCartItems}) {
  const handleClick = (items) => {
   if(cartItems.includes(items)) {
   return setCartItems(cartItems.filter(item => item !== items))
   } else {
    setCartItems([...cartItems, items])
   }
 console.log("items adding", items)
    
  }
  return (
    <div className='flex flex-col items-center justify-between mx-auto h-[400px] bg-white rounded-lg shadow-lg p-4'>
    <img src={items.image} alt={items.title} className='w-44 h-44 object-cover rounded-md mb-4' />
    <h1 className='text-md font-semibold text-gray-800 mb-2'>{items.title}</h1>
    <p className='text-gray-600 mb-4'>${items.price}</p>
    {cartItems.some(item => item === items) ? (<button onClick={() => handleClick(items)} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
    Added
    </button>) : ((<button onClick={() => handleClick(items)} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
        Add to Cart
    </button>)) }
 
  </div>
  )
}

export default ProductCard