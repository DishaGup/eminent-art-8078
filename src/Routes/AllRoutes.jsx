import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import { AdminPage } from "../Pages/Admin/AdminPage";
import { AdminProducts } from "../Pages/Admin/AdminProducts/AdminProducts";
import { AdminEditProduct } from "../Pages/Admin/AdminEditProduct";
import Payments from "./../Pages/Payments";
import { Home } from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";
import SingleProductPageMain from "../Components/ProductsPage/SingleProductPageMain";
import { Wishlist } from "../Pages/Wishlist";
import CartPage from "../Pages/cart/CartPage";
import { PrivateRoute } from "../Components/PrivateRoute";
import Allfilters from "../Components/ProductsPage/Allfilters";
import Sidebar from "../Components/ProductsPage/Sidebar";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/cartpage"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlistpage"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />
      <Route
        path="/adminpage"
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      />
      <Route path="/adminproducts" element={<AdminProducts />} />
      <Route path="/adminEditproducts/:id" element={<AdminEditProduct />} />

      <Route
        path="/payments"
        element={
          <PrivateRoute>
            <Payments />
          </PrivateRoute>
        }
      />
      <Route path="/products/:category?" element={<Sidebar />} />
      <Route
        path="/products/:category?/:id/single?"
        element={<SingleProductPageMain />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AllRoutes;
