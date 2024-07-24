import React, { useState } from 'react'
import Payment from './Pyament';

export default function Cart({user}) {

    const [isClicked, setIsClicked] = useState(false);
    function handleOnCLick()
    {
        setIsClicked(true);
    }
    if(isClicked)
    {
        return(
            <Pyament user = {user}/>
        )
    }  
  return (
    <>
         <h2>Cart page</h2>
         <h4>Good to go?</h4>
         <button onClick={handleOnCLick}>Proceed to Payment</button>
    </>
    
  );
}