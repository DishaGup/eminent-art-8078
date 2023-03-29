import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from '../Pages/Homepage'
import LoginPage from '../Pages/LoginPage'
import NotFoundPage from '../Pages/NotFoundPage'
import Registration from '../Pages/Registration'

const AllRoutes = () => {
  return (
    <Routes>
<Route path='/' element={<Homepage/> } />
<Route path='/login' element={<LoginPage/> } />
<Route path='/register' element={<Registration/> } />
<Route path='*' element={ <NotFoundPage/>} />
</Routes>


  )
}

export default AllRoutes