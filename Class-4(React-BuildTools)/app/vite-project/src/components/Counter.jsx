import React, { useState } from 'react'


function Counter() {
   const [count, setCount]= useState(0)

   function increment(){
    setCount(count+1)
   }

   // implemenet the decrement function

  return (
    <div>
        <button onClick={increment}>Increment</button>
         <h1>{count}</h1>
        <button>Decrement</button>
    </div>
  )
}

export default Counter