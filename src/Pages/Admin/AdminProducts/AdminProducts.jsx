import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../SidebarSection/Sidebar";
import "./adminproducts.css";
import { useEffect } from "react";
import {
  adminDeleteProduct,
  getAdminProducts,
} from "../../../Redux/AdminReducer/action";
import { Input, Text } from "@chakra-ui/react";
import { AdminAddProducts } from "../AdminAddProducts/AdminAddProducts";
import { Link } from "react-router-dom";

export const AdminProducts = () => {
  const { adminProducts, isLoading } = useSelector(
    (store) => store.adminReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminProducts());
  }, [adminProducts.length]);

  const handleDelete = (id) => {
    dispatch(adminDeleteProduct(id));
  };

  return (
    <div className="body">
      <div className="containerAdmin">
        <Sidebar />
        <div className="adminProductContent">
          <Input
            type="text"
            placeholder="Search products"
            bg={"#fff"}
            padding="0.8rem 3rem 0.8rem 2rem"
          />
          <span>
            <AdminAddProducts />
          </span>

          <div className="admin-prod-container">
            {adminProducts.length > 0 &&
              adminProducts.reverse().map((item) => {
                return (
                  <div className="admin-prod" key={item.id}>
                    <img className="admin-prod-img" src={item.image} alt="" />
                    <h4>Title: {item.title}</h4>
                    <Text>price : {item.price}</Text>
                    <p>Category : {item.category}</p>
                    <p>Tag: {item.tag}</p>
                    <div className="admin-prod-btns">
                      <Link to={`/adminEditproducts/${item.id}`}>
                        <button className="admin-btn admin-upd">Update</button>
                      </Link>
                      <button
                        className="admin-btn admin-del"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
