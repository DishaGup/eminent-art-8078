import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDoubleArrowRight } from "react-icons/rx";
import Sidebar from '../Components/ProductsPage/Sidebar'
import { getAllProducts, getProducts } from '../Redux/ProductReducer/action'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import PriceAccord from "../Components/ProductsPage/PriceAccord";

import Banner from "../Components/HomePage/Banner";
import { Box } from "@chakra-ui/react";
const ProductPage = () => {
  const navigate=useNavigate() 
  const {category} = useParams()
//console.log(category)
  const [searchParams,setSearchParams]=useSearchParams()
<<<<<<< HEAD
  let {loading, productsData, allData, params, filters}=useSelector((store)=>store.ProductReducer)

  console.log(allData)
=======
  let {loading, productsData, allData}=useSelector((store)=>store.ProductReducer)
>>>>>>> 1d86af8d59e6a284ba62ff29810433ed17c7eb40
let location=useLocation()
//console.log(category)
const initialsortdata =searchParams.get('sortingByPrice')
   
const[sortingByPrice,setSortingByPrice]=useState(initialsortdata || '' )
const handleGoBack = () => {
  navigate('/');
};

const urlPath = location.pathname.split("/");

let data={
params:{
  tag:searchParams.getAll('categorytag'),
    _sort: searchParams.get('sortingByPrice') && 'price',
    _order: searchParams.get('sortingByPrice'),
   price_gte:searchParams.getAll('sortrange').join('').split('-')[0] ,
    price_lte: searchParams.getAll('sortrange').join('').split('-')[1] ,
    _page:searchParams.get('pageno'),
    _limit:15,
    category: category || 'men',
    brand:searchParams.getAll('brandrange') 
}
}


const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getProducts(data))
},[location.search,category])
 
 
    return (
    <div>
 {/* <Banner/> */}

<Sidebar/>

    </div>
  )
}

export default ProductPage