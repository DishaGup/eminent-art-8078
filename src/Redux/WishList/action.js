import { ADDTOWISHLIST ,REMOVEFROMWISHLIST} from "../WishList/actiontype"


export const AddToWishList=(payload)=>(dispatch)=>{
    dispatch({type:ADDTOWISHLIST,payload:payload})
}

export const DeletFromWishList=(payload)=>(dispatch)=>{
      dispatch({type:REMOVEFROMWISHLIST,payload:payload})
}