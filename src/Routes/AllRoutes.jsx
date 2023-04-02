
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import Registration from "../Pages/Registration";
import { AdminPage } from "../Pages/Admin/AdminPage";
import { AdminProducts } from "../Pages/Admin/AdminProducts/AdminProducts";
import { AdminEditProduct } from "../Pages/Admin/AdminEditProduct";


import ProductPage from '../Pages/ProductPage'

import { SingleProductPage } from '../Pages/SingleProductPage'

import Payments from './../Pages/Payments';
import { Wishlist } from "../Pages/Wishlist";


const AllRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/adminproducts" element={<AdminProducts />} />
      <Route path="/adminEditproducts/:id" element={<AdminEditProduct />} />
      <Route path="*" element={<NotFoundPage />} />
      
<Route path='/payments' element={ <Payments/>} />
<Route path="/products/:path/:category?/:sub_category?/:brand?"  element={ <ProductPage/> }  />
<Route  path="/products/:path/:category?/:sub_category?/:id/single?"  element={<SingleProductPage/> }  />
<Route path="/wishlist"  element={<Wishlist/>}/>
    </Routes>
  );
};



export default AllRoutes;
