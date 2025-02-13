// using useEffect hook

import React, { useRef } from 'react'
import { useEffect, useState, useCallback } from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(4);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

    useEffect(()=>{
        console.log("App2 is mounting..")
    }, [])


 const passGen =  ()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm";

    if(numberAllowed){
        str+= '1234567890'
    }
    if(charAllowed){
        str += "!@#$%^&*(){}/[]\\|~`";
    }

    for(let i=0;i<length;i++){
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char); 
    }
    setPassword(pass)
}

useEffect(()=>{
    passGen();
    console.log("Password updated")
} , [length,numberAllowed,charAllowed ])

const passref = useRef('Null')
const copypass = useCallback(()=>{
    passref.current.select();
    passref.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password)
} , [password] )

 return (
    <div>
      <h1>Password Generator</h1>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="text"
          class="form-control  "
          placeholder="Password"
          aria-label="Password"
          aria-describedby="addon-wrapping"
          value={password}
          className="border-2 text
          -center "
          readOnly
          ref={passref}
        />
        <button type="button" className="btn btn-outline-info" onClick={copypass}>
            Copy
            </button>
      </div>

      <div className="flex flex-wrap">
        <label htmlFor="customRange2" className="form-label"></label>
        <input
          type="range"
          className="form-range"
          min="4"
          max="100"
          id="customRange2"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <div className="m-1">
          <label>Length: {length}</label>
        </div>

        <div className="m-1 pl-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label>Numbers</label>
        </div>

        <div className="m-1 pl-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label>Special Characters</label>
        </div>
      </div>
      
    </div>
  );
}

export default App