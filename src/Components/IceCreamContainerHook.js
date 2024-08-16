import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../Redux'

function IceCreamContainerHook() {
    const numberOfIceCream=useSelector(state=>state.iceCream.numberOfIceCream)
    const dispatch=useDispatch()
  return (
    <div>
      <h2>Number of IceCream-{numberOfIceCream}</h2>
      <button onClick={()=>{dispatch(buyIceCream(numberOfIceCream-2))}}>Buy ICE CREAM</button>
    </div>
  )
}

export default IceCreamContainerHook
