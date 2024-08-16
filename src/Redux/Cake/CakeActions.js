import { BUY_CAKE } from "./CakeTypes"
export const buyCake=(value)=>{
    return{
        type:BUY_CAKE,
        payload:value
    }
}