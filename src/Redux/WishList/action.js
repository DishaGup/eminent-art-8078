import { ADDTOWISHLIST, REMOVEFROMWISHLIST } from "../WishList/actiontype";

export const AddToWishList = (productData) => (dispatch) => {
axios.post("",productData).then
  dispatch({ type: ADDTOWISHLIST, payload: payload });
};

export const DeletFromWishList = (payload) => (dispatch) => {
  dispatch({ type: REMOVEFROMWISHLIST, payload: payload });
};
