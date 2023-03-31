import {
    GET_ALL_DATA_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS } from "./actiontype";
  
  let initialData = {
    loading: false,
    error: false,
    allData: [],
    productsData: []
  };
  
  export const reducer = (state = initialData, { type, payload }) => {
    switch (type) {
      case GET_PRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
     
      case GET_ALL_DATA_SUCCESS: {
        return {
          ...state,
          loading: false,
          allData: payload.data,
         
        };
      }
  
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
      
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
