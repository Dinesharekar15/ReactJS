import React from 'react'
import { useCard } from '../context/Cardcontext';



const Addedcard = () => {
    const card=useCard();
    const total=card.item.reduce((a,b)=>a+b.price,0)
  return (
    <div>
        <h2>Added ard</h2>
           <ul>
                {card && card.item.map((item) => (
                    <li> 
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <h2>Total Bill :${total}</h2>
    </div>
  )
}

export default Addedcard
