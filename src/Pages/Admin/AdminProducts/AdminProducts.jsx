import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../SidebarSection/Sidebar";
import "./adminproducts.css";
import { useEffect } from "react";
import {
  adminDeleteProduct,
  getAdminProducts,
} from "../../../Redux/AdminReducer/action";
import { Input, Text, Box, Flex } from "@chakra-ui/react";
import { AdminAddProducts } from "../AdminAddProducts/AdminAddProducts";
import { Link } from "react-router-dom";
import Pagination from "../../../Components/ProductsPage/Pagination";

export const AdminProducts = () => {
  const [pageno, setpageno] = useState(1);
  let { products, brands, currentPage, totalPages, totalResults } = useSelector(
    (store) => store.adminReducer.adminProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminProducts());
  }, []);

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
            {products &&
              products.length > 0 &&
              products.reverse().map((item) => {
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

          <Box>
            <Flex
              m="10px auto"
              justify={"center"}
              // border="2px solid #0076be"
              alignItems="center"
              w="300px"
              // borderStyle="dashed"
              borderRadius={"5px"}
            >
              {products && products.length > 1 && (
                <Pagination
                  current={pageno}
                  total={totalPages}
                  handlePageChange={(page) => setpageno(page)}
                />
              )}
            </Flex>
          </Box>
        </div>
      </div>
    </div>
  );
};
