import React from 'react'

function Carts({ cartItems, setCartItems }) {
  const totalValue = cartItems.reduce((total, item) => total + item.price, 0);
const handleDelete = (id) => {
  setCartItems(cartItems.filter(items => items.id !== id))
}
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm">
              <div>
                <img src={item.image} alt={item.title} width={40}/>
                <p className="text-lg font-semibold text-gray-700">{item.title}</p>
                <p className="text-gray-600">Category: {item.category}</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">${item.price.toFixed(2)}</p>
              <p onClick={() => handleDelete(item.id)} className="text-lg font-semibold text-red-800 cursor-pointer">Remove</p>
            </div>
          ))}
          <div className="text-right text-xl font-bold text-gray-800 mt-4">
            Total amount = ${totalValue.toFixed(2)}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Carts;
