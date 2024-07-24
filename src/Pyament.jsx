import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';

export default function Payment() {
    const [isClicked, setIsClicked] = useState(false);

 const user = useSelector(state => state.user);
 const dispatch =useDispatch();


    function handleOnCLick()
    {
        setIsClicked(true);
        dispatch(updateWallet(5000)); //payload (5000)
    }
    if(isClicked)
    {
        return(
            <>
                <h2>Payment page</h2>
                <h4>Username: {user.username}</h4>
                <h4>Wallet: {user.wallet}</h4>

                <button onClick={handleOnCLick}>Pay</button>
                <h4>Updated Wallet : {user.wallet-5000}</h4>
                
            </>
        )
    }  
  return (
    <>
         <h2>Payment page</h2>
         <h4>Username: {user.username}</h4>
         <h4>Wallet: {user.wallet}</h4>
         <button onClick={handleOnCLick}>Pay</button>
    </>
    
  )
}