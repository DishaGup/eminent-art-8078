
import { ADD_USER_REQ, ADD_CARD_REQ} from "./actiontype"

const initState={
    "Address":{},
    "card":{}
}

export const reducer =(state=initState,{type,payload})=>{
      switch(type){
        case ADD_CARD_REQ:{
            return {...state,Address:payload}
        }
        case ADD_USER_REQ:{
            return {...state,card:payload}
        }
        default:{
            return state
        }
      }
}