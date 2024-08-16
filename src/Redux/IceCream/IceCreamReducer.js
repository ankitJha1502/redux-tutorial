import { BUY_ICE_CREAM } from "./IceCreamTypes"
const iceCreamState={
    numberOfIceCream:20
}

const iceCreamReducer=(state=iceCreamState,action)=>{
    switch(action.type)
    {
        case BUY_ICE_CREAM:
            return{
                ...state,
                numberOfIceCream:state.numberOfIceCream-action.payload
            }
        default:return state
    }
}
export default iceCreamReducer