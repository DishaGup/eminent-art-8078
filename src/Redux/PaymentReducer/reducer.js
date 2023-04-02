import { CARDDETAIL, SHHIPINGADD } from "./actiontype"

const initState={
    "Address":{},
    "card":{}
}

export const reducer =(state=initState,{type,payload})=>{
      switch(type){
        case SHHIPINGADD:{
            return {...state,Address:payload}
        }
        case CARDDETAIL:{
            return {...state,card:payload}
        }
        default:{
            return state
        }
      }
}