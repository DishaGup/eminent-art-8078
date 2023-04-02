import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../Components/ProductsPage/Sidebar";
import { getAllProducts } from "../Redux/ProductReducer/action";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  //console.log(category)
  const [searchParams, setSearchParams] = useSearchParams();
  let { loading, productsData, allData } = useSelector(
    (store) => store.ProductReducer
  );
  let location = useLocation();
  //console.log(category)
  const initialsortdata = searchParams.get("sortingByPrice");

  const [sortingByPrice, setSortingByPrice] = useState(initialsortdata || "");
  const handleGoBack = () => {
    navigate("/");
  };

  const urlPath = location.pathname.split("/");

  let data = {
    params: {
      tag: searchParams.getAll("categorytag"),
      _sort: searchParams.get("sortingByPrice") && "price",
      _order: searchParams.get("sortingByPrice"),
      price_gte: searchParams.getAll("sortrange").join("").split("-")[0],
      price_lte: searchParams.getAll("sortrange").join("").split("-")[1],
      _page: searchParams.get("pageno"),
      _limit: 15,
      category: category || "men",
      brand: searchParams.getAll("brandrange"),
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(data));
  }, [location.search, category]);

  return (
    <div>
      {/* <Banner/> */}

      <Sidebar />
    </div>
  );
};

export default ProductPage;
