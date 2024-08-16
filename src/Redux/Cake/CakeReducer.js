import { BUY_CAKE } from "./CakeTypes"

const cakeState={
    numberOfCake:10
}

const cakeReducer=(state=cakeState,action)=>
{
    switch(action.type)
    {
        case BUY_CAKE:
            return{
                ...state,
                numberOfCake:state.numberOfCake-action.payload
            }
        default: return state
    }
}
export default cakeReducer