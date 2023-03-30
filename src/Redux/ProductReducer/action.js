import axios from "axios";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,} from "./actiontype";


export const getProducts =(data)=>(dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  
  try {
     axios.get(
      `http://localhost:4444/products?_page=1&_limit=10`,data).then((res)=>dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res ,
      }) )
  

  
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};
