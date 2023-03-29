import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProducts from "./Admin/AdminProducts/AdminProducts";
import Body from "./Admin/BodySection/Body";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/adminbody" element={<Body />} />
      <Route path="/adminproducts" element={<AdminProducts />} />
    </Routes>
  );
};

export default AdminRoute;
