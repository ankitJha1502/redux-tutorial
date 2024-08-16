import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType"

const userState={
    loading:true,
    users:[],
    error:''
}

const userReducer=(state=userState,action)=>{
    switch(action.type)
    {
        case FETCH_USER_REQUEST:return{
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS:return{
            ...state,
            users:action.payload,
            error:''
        }
        case FETCH_USER_FAILURE:return{
            ...state,
            error:action.payload,
            users:[]
        }
        default:return state
    }
}
export default userReducer