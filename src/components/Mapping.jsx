import React from 'react'

const Mapping = () => {
    const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
        <h2>Mapping: </h2>
        {numbers.map((num , index)=>{
            return <p key={index}>{num}</p>
        })}

      
    </div>
  )
}

export default Mapping
