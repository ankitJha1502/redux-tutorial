const { BUY_ICE_CREAM } = require("./IceCreamTypes")

export const buyIceCream=(value)=>{
    return{
        type:BUY_ICE_CREAM,
        payload:value
    }
}