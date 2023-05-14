import {
  ADD_PRODUCTS_SUCCESS,
    ADD_WISHLIST_SUCCESS,
    GET_ALL_DATA_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS } from "./actiontype";
  
  let initialData = {
    loading: false,
    error: false,
    allData: [],
    productsData: [],
    cartdata:[],
    wishlistdata:[]
  };
  
  export const reducer = (state = initialData, { type, payload }) => {
    switch (type) {
      case GET_PRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
     
      // case GET_ALL_DATA_SUCCESS: {
      //   return {
      //     ...state,
      //     loading: false,
      //     allData: payload.data,
         
      //   };
      // }
  
      case GET_PRODUCTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          productsData: payload.data,
        
        };
      }
      case GET_PRODUCTS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
case ADD_PRODUCTS_SUCCESS: {
              return {
          ...state,
          loading: false,
          cartdata:payload.data
        };
      }

      case ADD_WISHLIST_SUCCESS: {
        return {
    ...state,
    loading: false,
    wishlistdata:payload.data
  };
}

      
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
