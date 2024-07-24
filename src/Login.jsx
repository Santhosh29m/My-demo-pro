import React, { useState } from 'react'
import Shopping from './Shopping';

export default function Login({user}) {
    const [isClicked, setIsClicked] = useState(false);
    function handleOnClick(){
        setIsClicked(true);
    }
    if(isClicked){
        return(
            <Shopping user ={user}/>
        )
    }
  return (
  <>
  <h2>Loging page</h2>
  <h4>Username : {user.username}</h4>
  <h4>Wallet : {user.wallet}</h4>

  <button onClick={handleOnClick}>Shopping</button>
  </>
  )
}
