import './App.css';
import Products from './Components/Products';
import { useEffect, useState } from 'react';
import Carts from './Components/Carts';
import axios from 'axios';

function App() {
  const [isCart, setIsCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const handleClick = () => {
    setIsCart((prev) => !prev);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products?limit=10'
        );
        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col bg-black w-screen h-full text-white">
      <div className="flex bg-slate-800 w-screen h-fit justify-around mx-auto  ">
        <h1>Shopping Cart</h1>
        <div onClick={handleClick} className="cursor-pointer">
          Cart
        </div>
      </div>
      <div>
        {isCart ? (
          <Carts
            products={products}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ) : (
          <Products
            products={products}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </div>
    </div>
  );
}

export default App;
