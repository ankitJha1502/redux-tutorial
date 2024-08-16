import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux'

function CakeContainer(props) {
    console.log(props)
  return (
    <div>
     <div>
        Number of cakes-{props.cake.numberOfCake}
        </div> 
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        numberOfCake:state.numberOfCake
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
