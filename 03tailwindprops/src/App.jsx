import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let newobj = {
    username: "Arif" ,
    Age: 21
  }
  let newobj2 = {
    username2: "Arif's Desk" ,
    Age2: 21
  }
  let newobj3 = {
    username3: "Saqif's Desk" ,
    Age3: 21
  }
  let newarr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-white rounded-xl p-4'> Hello Tailwind</h1>
     <Card username = "Arif"  someobj = {newobj} someobj2 = {newobj2.username2}/>
     <Card someobj2={newobj3.username3} />

    </>
  )
}

export default App
