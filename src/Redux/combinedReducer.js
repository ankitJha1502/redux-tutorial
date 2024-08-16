import { combineReducers } from "redux";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import cakeReducer from "./Cake/CakeReducer";
import userReducer from "./Users/userReducer";

const rootReducer=combineReducers(
    {
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        userData:userReducer
    })
export default rootReducer