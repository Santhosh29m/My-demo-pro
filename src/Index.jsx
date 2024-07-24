import React, { useState } from 'react'
import Login from './Login';


export default function Index() {

    const user = {
        username : 'Santhosh ',
        wallet : 25000
    }
    const [isClicked, setIsClicked] = useState(false);

    function handleOnClick(){
        setIsClicked(true);
    }

if(isClicked){
    return(
        <Login user = {user}/>
    )
}

  return (
    <>
   <h2>Welcome to index Page!</h2>
   <button onClick={handleOnClick}>Login</button>
   </>
  )
}

