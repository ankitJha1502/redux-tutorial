import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { buyCake, buyIceCream } from '../Redux'

function ItemContainer(props) {

    const itemCakeCount=useSelector(state=>state.cake.numberOfCake)
    const itemIceCreamCount=useSelector(state=>state.iceCream.numberOfIceCream)
    
    const dispatch=useDispatch()
    const handleItems=()=>{
        props.cake?dispatch(buyCake(1)):dispatch(buyIceCream(2))
    }
  return (
    <div>
      <h2>Item-{props.cake?itemCakeCount:itemIceCreamCount}</h2>
      <button onClick={()=>{
        handleItems()
      }}>itemClicked</button>
    </div>
  )
}

export default ItemContainer
