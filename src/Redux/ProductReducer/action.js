import axios from "axios";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,} from "./actiontype";


export const getProducts =(data)=>(dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  
  try {
     axios.get(
      `http://localhost:4444/products`,data).then((res)=>dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res ,
      }) )
  

  
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};


export const getSingleProducts =(id)=>(dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  

   return  axios.get(
      `http://localhost:4444/products/${id}`).then((res)=>dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res ,
      }) ).catch((error)=>dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message })
      )
};

export const getAllProducts =(category) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
   axios.get(
      `http://localhost:4444/products`,category).then((res)=>dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res ,
      }) ).catch((error)=>dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message })
      )
};
