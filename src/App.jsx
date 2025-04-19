import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './Components/Product/Product'
import Cart from './Components/Cart/Cart'
import ProductDetails from './Components/ProductsDetails/ProductDetails'
import Products from './Components/ApiProducts/ApiProducts'




function App() {
  const [cartCount, setCartCount] = useState([]);

  return (
    <>

      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/e-commercee-task" element={<Product setCartCount={setCartCount} />} />
        <Route path='/cart' element={<Cart cartCount={cartCount} setCartCount={setCartCount} />} />
        <Route path='/product-details/:id' element={<ProductDetails setCartCount={setCartCount} />} />
        <Route path='/api-products' element={<Products />} />

      </Routes>

    </>
  )
}

export default App
