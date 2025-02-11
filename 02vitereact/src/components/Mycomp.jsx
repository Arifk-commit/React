import React, { useEffect } from 'react'
import { useState } from 'react'
const Mycomp = () => {

const [Count, setCount] = useState(1)
useEffect(()=>{
  console.log("Comp is mounting...")
}, []);
useEffect(()=>{
  console.log("count is updated.", Count)
} , [Count])
  return (
    <div>
      <h3>my count is {Count}</h3>
      <button onClick={()=>{setCount(Count + 1)}}> increment</button>
    </div>
  )
}

export default Mycomp