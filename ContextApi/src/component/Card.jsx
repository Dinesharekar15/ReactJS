import React from 'react'

import { useCard } from '../context/Cardcontext'

const Card = (props) => {
  const card=useCard();
  console.log("card",card);
  return (
    <div>
       <h2>{props.name}</h2>
       <h3>${props.price}</h3>
       <button 
       onClick={()=>{
          card.setitem([...card.item,{name:props.name,price:props.price}])
       }}
       >Add to card</button>
    </div>
  )
}

export default Card
