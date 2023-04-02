import { ADDTOWISHLIST, REMOVEFROMWISHLIST } from "./actiontype"

const initState={
    "WishList":[],
    
}

export const reducer =(state=initState,{type,payload})=>{
      switch(type){
        case ADDTOWISHLIST:{
            return {...state,WishList:payload}
        }
        case REMOVEFROMWISHLIST:{
            return {...state, WishList:payload}
        }
        default:{
            return state
        }
      }
}