import { CARDDETAIL, SHHIPINGADD } from "./actiontype"

export const UdateAddress=(payload)=>{
    return{type:SHHIPINGADD,payload:payload}
}

export const UdateCard=(payload)=>{
      return{type:CARDDETAIL,payload:payload}
}