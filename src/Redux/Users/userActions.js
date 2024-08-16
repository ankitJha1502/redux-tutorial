import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType"
import axios from 'axios'

export const fetchUserSuccess=(value)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:value
    }
}

export const fetchUserFailure=(value)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:value
    }
}

export const fetchUserRequests=(value)=>{
    return{
        type:FETCH_USER_REQUEST,
        payload:value
    }
}

export const fetchUsers=()=>{

    return (dispatch)=>{
        dispatch(fetchUserRequests(true))
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        const users=res.data.map((item)=>item.id)
        dispatch(fetchUserSuccess(users))
    }).catch(err=>{
        dispatch(fetchUserFailure(err.message))
    })
    }
    
}
