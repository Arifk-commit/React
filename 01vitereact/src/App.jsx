import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setcounter] = useState(0)

  
  const addValue = ()=>{
    setcounter(counter + 1)
    if(counter == 10){
      alert("Max Value")
      setcounter(10)
    }
    if(counter < 10){
      console.log(counter + 1 );
  
    }
  }

  const decValue = ()=>{
    setcounter(counter - 1)
   if(counter == 0){
    setcounter(0)
    alert("Minimum Reached")
   }
   if(counter > 0){
    console.log(counter -1)
   }
   
  }
  return (
    <>
      <h1>Hello React</h1>
      <p>couter program</p>
      <h2>counter value is {counter}</h2>
      <button onClick={addValue}>Increase</button>
      <button onClick={decValue}>Decrease</button>
    </>
  )
}

export default App
