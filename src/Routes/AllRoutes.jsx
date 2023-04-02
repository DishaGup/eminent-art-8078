
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import Registration from "../Pages/Registration";
import { AdminPage } from "../Pages/Admin/AdminPage";
import { AdminProducts } from "../Pages/Admin/AdminProducts/AdminProducts";
import { AdminEditProduct } from "../Pages/Admin/AdminEditProduct";

import { SingleProductPage } from '../Pages/SingleProductPage'

import Payments from './../Pages/Payments';
import { Home } from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";
import SingleProductPageMain from "../Components/ProductsPage/SingleProductPageMain";
import CartDisplayProduct from "../Pages/cart-display-product/CartDisplayProduct";
import { Wishlist } from "../Pages/Wishlist";
import CartPage from "../Pages/cart/CartPage";


const AllRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage />} />
       <Route path="/cartpage" element={<CartPage/>  } /> 
       <Route path="/wishlistpage" element={<Wishlist/>  } />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/adminproducts" element={<AdminProducts />} />
      <Route path="/adminEditproducts/:id" element={<AdminEditProduct />} />
      
      <Route path="*" element={<NotFoundPage />} />      
<Route path='/payments' element={ <Payments/>} />
<Route path="/products/:category?"  element={<ProductPage/>}   />
<Route  path="/products/:category?/:id/single?"  element={<SingleProductPageMain/> }  />

    </Routes>
  );
};



export default AllRoutes;
