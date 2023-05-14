import { ADD_CARD, ADD_USER} from "./actionType"
export const AddUser=(payload)=>(dispatch)=>{
    dispatch({type:ADD_USER,payload:payload})
}

export const AddCard=(payload)=>(dispatch)=>{
      dispatch({type:ADD_CARD,payload:payload})
}