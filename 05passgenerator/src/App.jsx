import { useEffect, useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(4);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm";


    if (numberAllowed) {
      str += "0123456789";
      
    }
    
    
    if (charAllowed) {
      str += "!@#$%^&*(){}/[]\\|~`";
    }

    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char); 
    }

    setPassword(pass); 
  };
  
  // useEffect(() => {
  //   passGen();
  // }, [length, numberAllowed, charAllowed, passGen]);

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
        />
        <button type="button" className="btn btn-outline-info">Copy</button>
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
      <div>
      <button type="button" class="btn btn-outline-info" onClick={passGen}>Generate</button>
      </div>
    </div>
  );
}

export default App;
