import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  const white = ()=>{
    setColor("White")
  }
  const black = ()=>{
    setColor("black")
  }
  const red = ()=>{
    setColor("red")
  }
  const Yellow = ()=>{
    setColor("yellow")
  }
  const blue = ()=>{
    setColor("blue")
  }
  const green = ()=>{
    setColor("green")
  }
  return (
    <div className='w-screen h-screen' style={{backgroundColor : color}}>
    
    <div className=' flex flex-wrap justify-center p-4 gap-3 border-2 border-black' >
      <button onClick={white} className='bg-white text-black'>White</button>
      <button onClick={black} className='bg-black text-white'>Black</button>
      <button onClick={red} className='bg-red-500 text-white'>Red</button>
      <button onClick={Yellow} className='bg-yellow-400 text-white'>Yellow</button>
      <button onClick={blue} className='bg-blue-600 text-white'>Blue</button>
      <button onClick={green} className='bg-green-600 text-white'>Green</button>
      
    </div>
   </div>
  )
}

export default App
