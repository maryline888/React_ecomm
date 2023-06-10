import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Promo from './components/Promo'
import About from './components/About'

import Shop from './components/Shop'

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    //console.log(data)
    return data
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/product/${id}`, {
      method: 'DELETE',
    })

    setProducts(products.filter((product) => product.id !== id))
  }

  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const newProduct = await res.json()
    setProducts([...products, newProduct])
  }

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    //console.log(data)
    return data
  }

  const updateProduct = async (product) => {
    const res = await fetch(`http://localhost:5000/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    if (res.ok) {
      const updatedProduct = await res.json()

      setProducts(products.map((prod) => {
        if (prod.id === product.id) {
          return updatedProduct
        } else {
          return prod
        }
      }))
    }
  }


  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/shop' element={<Shop products={products} onProductUpdate={updateProduct} />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Promo />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
