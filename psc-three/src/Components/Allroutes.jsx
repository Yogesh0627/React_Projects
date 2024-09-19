import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Products from '../Pages/Products'
import Register from '../Pages/Register'
import SinglePageProduct from '../Pages/SinglePageProduct'
import PrivateRouter from './PrivateRouter'
const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={
        <PrivateRouter><Contact /></PrivateRouter>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/products' element={
       <PrivateRouter> <Products /></PrivateRouter>
      } />
      <Route path='register' element={<Register />} />
      <Route path='/products/:id' element={
       <PrivateRouter> <SinglePageProduct /></PrivateRouter>
      } />
      {/* <Route path='/products/2' element={
        <SinglePageProduct />
      } /> */}

    </Routes>
  )
}

export default Allroutes