import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux'
function CakeContainerHooks() {

    const numberOfCake=useSelector(state=>state.cake.numberOfCake)
    const dispatch=useDispatch()

  return (
    <div>
      <h2>Number of cake-{numberOfCake}</h2>
      <button onClick={()=>dispatch(buyCake(numberOfCake-1))}>Buy hook cake</button>
    </div>
  )
}

export default CakeContainerHooks
