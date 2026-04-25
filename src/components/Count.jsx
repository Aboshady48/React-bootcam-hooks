import React from 'react'
import { useState } from "react";

const Count = () => {
    let [ahmed , setAhmed]= useState(0);
    const [value , setValue]  = useState("");

    const handelIncrement = () => {
        setAhmed(ahmed +1 )
    }
    const handelDecrement = () => {
        setAhmed(ahmed  -1 )
    }
    const handelReset = () => {
        setAhmed(0)
    }
  return (
    <div>
        <button onClick={handelIncrement}>Incremnet</button>
        <button onClick={handelDecrement}> Decrement</button>
        <button onClick={handelReset}> Reset</button>


    </div>
  )
}

export default Count
