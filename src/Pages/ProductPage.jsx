import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDoubleArrowRight } from "react-icons/rx";
import Sidebar from '../Components/ProductsPage/Sidebar'
import { getAllProducts, getProducts } from '../Redux/ProductReducer/action'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import PriceAccord from "../Components/ProductsPage/PriceAccord";

import Banner from "../Components/HomePage/Banner";
const ProductPage = () => {
  const navigate=useNavigate()
  const {category} = useParams()

  const [searchParams,setSearchParams]=useSearchParams()
  let {loading, productsData, allData, params, filters}=useSelector((store)=>store.ProductReducer)
let location=useLocation()
//console.log(category)
const initialsortdata =searchParams.get('sortingByPrice')
   
const[sortingByPrice,setSortingByPrice]=useState(initialsortdata || '' )
const handleGoBack = () => {
  navigate('/');
};

const urlPath = location.pathname.split("/");
let price=199
let data={
params:{
  tag:searchParams.getAll('categorytag'),
    _sort: searchParams.get('sortingByPrice') && 'price',
    _order: searchParams.get('sortingByPrice'),
   price_gte:searchParams.getAll('sortrange').join('').split('-')[0] ,
    price_lte: searchParams.getAll('sortrange').join('').split('-')[1] ,
    _page:searchParams.get('pageno'),
    _limit:15,
    category:category
}

}


const dispatch=useDispatch()


useEffect(()=>{
  // if(category!==undefined){
  //   data.params.catgeory=category
  //  dispatch(getProducts(data))
  // }else{ 
  //   data.params.catgeory=category
  dispatch(getAllProducts(data))
},[location.search])
 
 
    return (
    <div>
      <Banner/>

      
<Sidebar/>
{/* <PriceAccord/> */}
    </div>
  )
}

export default ProductPage