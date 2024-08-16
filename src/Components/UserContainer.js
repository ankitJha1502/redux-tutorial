import React, { useEffect } from 'react'
import { fetchUserFailure, fetchUserRequests, fetchUsers } from '../Redux/index'
import { useDispatch, useSelector } from 'react-redux'

function UserContainer() {


    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    
    const userData=useSelector(state=>state.userData)
    console.log(userData,"userData")
  return (
    <div>
      <h2>users</h2>
      <ul>{
            userData?.users.map((item,index)=>{
                return(
                    <li key={item}>{item}</li>
                )
            })
        }</ul>
    </div>
  )
}
export default UserContainer
