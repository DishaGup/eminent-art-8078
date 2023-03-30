import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDoubleArrowRight } from "react-icons/rx";
import Sidebar from '../Components/ProductsPage/Sidebar'
import { getProducts } from '../Redux/ProductReducer/action'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
const ProductPage = () => {
  const navigate=useNavigate()
  const [searchParams,setSearchParams]=useSearchParams()
  let {loading, productsData, allData, params, filters}=useSelector((store)=>store.ProductReducer)
let location=useLocation()

const initialsortdata =searchParams.get('sortingByPrice')
   
const[sortingByPrice,setSortingByPrice]=useState(initialsortdata || '' )
const handleGoBack = () => {
  navigate(-1);
};
const urlPath = location.pathname.split("/");
let price=199
let data={
params:{
  category:searchParams.getAll('category'),
    _sort: searchParams.get('sortingByPrice') && 'price',
    _order: searchParams.get('sortingByPrice')
}

}

const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getProducts(data))
},[location.search])
 
 
    return (
    <div>
<Sidebar/>

    </div>
  )
}

export default ProductPage