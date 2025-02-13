import { useState } from 'react'
import React from 'react'
import App from './App.jsx'
import App2 from './App2.jsx'
const Switch = () => {

    const [isVisible, setisVisible] = useState(true)

  return (
    <div>
        {/* button for switching  */}
      <div>
      <button type="button" class="btn btn-outline-secondary" onClick={() => { setisVisible(!isVisible) }}>
        Switch
      </button>
      {isVisible ? <App /> : <App2 />}

      </div>

    </div>
  )
}

export default Switch