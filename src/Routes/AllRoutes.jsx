import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from '../Pages/Homepage'
import LoginPage from '../Pages/LoginPage'
import NotFoundPage from '../Pages/NotFoundPage'
import ProductPage from '../Pages/ProductPage'
import Registration from '../Pages/Registration'
import { SingleProductPage } from '../Pages/SingleProductPage'
import { AdminPage } from './../Pages/Admin/AdminPage';
import Payments from './../Pages/Payments';

const AllRoutes = () => {

  return (
    <Routes>
<Route path='/' element={<Homepage/> } />
<Route path='/login' element={<LoginPage/> } />
<Route path='/register' element={<Registration/> } />
<Route path='*' element={ <NotFoundPage/>} />
<Route path='/adminpage' element={ <AdminPage/>} />
<Route path='/payments' element={ <Payments/>} />
<Route path="/products/:path/:category?/:sub_category?/:brand?"  element={ <ProductPage/> }  />
<Route  path="/products/:path/:category?/:sub_category?/:id/single?"  element={<SingleProductPage/> }  />

</Routes>


  )
}

export default AllRoutes