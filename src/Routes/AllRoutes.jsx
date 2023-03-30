import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from '../Pages/Homepage'
import LoginPage from '../Pages/LoginPage'
import NotFoundPage from '../Pages/NotFoundPage'
import Registration from '../Pages/Registration'
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

</Routes>


  )
}

export default AllRoutes