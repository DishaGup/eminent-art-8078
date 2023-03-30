import {
  ADMIN_GET_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FALIURE,
  ADMIN_PRODUCT_REQUEST,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  adminProducts: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case ADMIN_PRODUCT_FALIURE:
      return { ...state, isLoading: false, isError: true };
    case ADMIN_GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, adminProducts: payload };

    default:
      return state;
  }
};
