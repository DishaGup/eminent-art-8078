import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../SidebarSection/Sidebar";
import "./adminproducts.css";
import { useEffect } from "react";
import { getAdminProducts } from "../../../Redux/AdminReducer/action";
import { Input } from "@chakra-ui/react";

export const AdminProducts = () => {
  const { adminProducts } = useSelector((store) => store.adminReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminProducts());
  }, []);

  console.log(adminProducts);
  return (
    <div className="body">
      <div className="containerAdmin">
        <Sidebar />
        <div className="adminProductContent">
          <div>
            <Input type="text" placeholder="Search products" bg={"#fff"} />
          </div>
          <div></div>
          <div style={{ border: "1px solid", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};
