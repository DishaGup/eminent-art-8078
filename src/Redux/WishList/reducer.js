
import { DDTOWISHLIST_REQ,  REMOVEFROMWISHLIST_REQ } from "./actiontype"

const initState={
    isLoadind:false,
    isError:false,
    "WishList":[],
}

export const reducer =(state=initState,{type,payload})=>{
      switch(type){
        // case DDTOWISHLIST_REQ:{
        //     return {...state,WishList:payload}
        // }
        // case  REMOVEFROMWISHLIST_REQ:{
        //     return {...state, WishList:payload}
        // }
        default:{
            return state
        }
      }
}