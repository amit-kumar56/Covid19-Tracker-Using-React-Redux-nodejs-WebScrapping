//import { ADD_TO_CART,REMOVE_FROM_CART } from '../constants'
const initialState = {
    stateData: []
}
export default function storeItems(state = [], action) {
    switch (action.type) {
        case "TRACKER":
             console.warn("reducer",action)
             if(state.length!==0)
             {
                 return [
                     ...state,
                    
                 ]
             }else
             {
                return [
                    ...state,
                    {stateData: action.data}
                ]
             }   
        default:
            return state
    }

}
